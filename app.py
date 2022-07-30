import datetime
import hashlib

from flask import Flask
from flask_restful import reqparse, abort, Api, Resource, request
from flask_cors import *
import os
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, decode_token
from flask_jwt_extended import JWTManager
import base64
import json
import rsa
from flask_sqlalchemy import SQLAlchemy

# 数据库建表、连接 最多
# 注册、登录、salt 中间
# 文件上传、下载 最少

app = Flask(__name__, static_folder='dist', static_url_path='/')
app.config["SECRET_KEY"] = "wujie!"
app.config[
    'SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://cucpan:CUCpan12@bj-cynosdbmysql-grp-bmn58zec.sql.tencentcdb.com:20437/cucpan'
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
CORS(app, supports_credentials=True)
api = Api(app)
jwt = JWTManager(app)
db = SQLAlchemy(app)


class User(db.Model):
    ___tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    client_random = db.Column(db.String(120))
    master_key_enc = db.Column(db.Text)
    derived_auth_key_hashed = db.Column(db.String(120))
    rsa_private_key_enc = db.Column(db.Text)
    rsa_public_key = db.Column(db.Text)


@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')


@app.route('/time')
def server_time():
    html = '<html><head><title>Server Time</title></head><body>'
    html += '<h1>Server Time</h1>'
    html += '<p>The current time is: %s</p>' % datetime.datetime.now()
    html += '</body></html>'
    return html


# 总体写的时候要看表格和老师的要求

@app.route('/api/salt', methods=['POST'])
def salt():
    # 先获取到前端传来的信息
    data = json.loads(request.data)
    email = data['email']

    # 检查是否已经注册
    user = User.query.filter_by(email=email).first()
    random = user.client_random if user else "server_random_here_server_random"  # 没有注册使用服务器随机数

    # padding
    salt = email + random
    while (len(salt) < 64):
        salt += "w"
    # sha256 和前端一致
    salt = hashlib.sha256(salt.encode()).hexdigest()

    return json.dumps({'enc_salt': salt})


@app.route('/api/login', methods=['POST'])
def login():
    json_data = json.loads(request.data)
    password = json_data['password']
    email = json_data['email']
    md5_password = hashlib.md5(password.encode()).hexdigest()
    user_in_db = User.query.filter_by(email=email).first()
    if user_in_db:
        auth_key_in_db = user_in_db.derived_auth_key_hashed
    else:
        auth_key_in_db = ""

    # 比对密码
    if md5_password == auth_key_in_db:
        api_token = create_access_token(identity=user_in_db.email)
        return json.dumps({'api_token': api_token, "master_key": user_in_db.master_key_enc,
                           "rsa_private_key": user_in_db.rsa_private_key_enc, "email": user_in_db.email})
    else:
        return json.dumps({'errors': {"password": ["密码错误"]}}), 400


@app.route('/api/register', methods=['POST'])
def register():
    # 解析json格式的数据
    json_data = json.loads(request.data)

    # 检查是否为空或未生成
    for key in json_data:
        if json_data[key] == '':
            return json.dumps({'errors': {key: [key + "为空"]}}), 500
        if "生成中" in json_data[key]:
            return json.dumps({'errors': {key: [key + "生成失败，请使用Chrome或Safari"]}}), 500

    client_random = json_data['client_random']
    derived_auth_key_hashed = json_data['derived_auth_key_hashed']
    email = json_data['email']
    master_key_enc = json_data['master_key_enc']
    rsa_private_key_enc = json_data['rsa_private_key_enc']
    rsa_public_key = json_data['rsa_public_key']

    # 检查重复注册
    if User.query.filter_by(email=email).first():
        return json.dumps({'errors': {"email": ["邮箱已注册，请直接登录"]}}), 400

    # 将数据存入数据库
    try:
        user = User(email=email, client_random=client_random, master_key_enc=master_key_enc,
                    derived_auth_key_hashed=derived_auth_key_hashed, rsa_private_key_enc=rsa_private_key_enc,
                    rsa_public_key=rsa_public_key)
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        return json.dumps({'errors': {'db': [str(e)]}}), 500

    # 返回信息
    return "注册成功"


@app.route('/api/verify_token', methods=['POST'])
@jwt_required()
def verify_token():
    # data = request.data
    # data = json.loads(data)
    # api_token = data['api_token']
    # return json.dumps({'api_token': api_token})
    return json.dumps({"identity": get_jwt_identity()})


@app.route('/api/upload', methods=['POST'])
def upload():
    raw = request.data
    json_data = json.loads(raw)
    encrypted = json_data['encrypted']
    file_enc_key = json_data['file_enc_key']
    name = json_data['name']
    type = json_data['type']

    # 获取前端发送的文件和文件信息
    # 验证JWT
    # 检查文件信息（大小。。。
    # 存储文件和文件信息（把文件以随机的文件名存在本地，在数据库里存储原本的文件名和在本地的路径）

    return json.dumps({"errors": [{"file": "file is too large"}]}), 500


@app.route('/api/download/<file_id>', methods=['POST'])
def download(file_id):
    # 获取前端发送的文件名
    # 验证JWT
    # 根据文件名在数据库中找到文件存储的路径
    # 返回文件
    return ""


@app.route('/api/gen_rsa')
def gen_rsa():
    (pubkey, privkey) = rsa.newkeys(1024)
    return str(pubkey)


@app.route('/api/share', methods=['POST'])
def share():
    json_data = json.loads(request.data)
    share_token = create_access_token(identity=json_data, expires_delta=False)
    # return json.dumps({'errors': {"file": ["无操作权限"]}}), 422
    return json.dumps({"share_token": share_token})


@app.route('/api/share_info', methods=['POST'])
def share_info():
    json_data = json.loads(request.data)
    jwt = json_data['share_token']
    idt = decode_token(jwt)["sub"]
    created_timestamp = idt['created_timestamp'] / 1000
    created_time = datetime.datetime.fromtimestamp(created_timestamp)
    now_time = datetime.datetime.now()
    expired_days = idt['expired_days']
    time_delta = datetime.timedelta(days=expired_days)
    expired_date = created_time + time_delta
    if now_time > expired_date:
        return json.dumps({'errors': {"expired": [f"分享链接已经于{expired_date.strftime('%Y-%m-%d %H:%M:%S')}过期。"]}}), 422

    info = {"share_filename": idt['share_filename'],
            "table": {
                "share_user": idt['share_user'],
                "description": idt['description'],
                "expired_download_count": idt['expired_download_count'],
                "share_rsa_pk": idt['share_rsa_pk'],
                "share_enc_key": idt['share_enc_key']}}
    return json.dumps(info)


app.run(host="0.0.0.0", port=9000)
