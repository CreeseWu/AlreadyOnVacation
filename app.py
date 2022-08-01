import datetime
import hashlib
from uuid import uuid4

from flask import Flask
from flask_restful import reqparse, abort, Api, Resource, request
from flask_cors import *
import os
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, decode_token
from flask_jwt_extended import JWTManager
import base64
import json
# from Crypto.PublicKey import RSA
# from Crypto.Cipher import PKCS1_v1_5 as Cipher_pkcs1_v1_5
import rsa
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.mysql import MEDIUMTEXT

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
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    client_random = db.Column(db.String(120))
    master_key_enc = db.Column(db.Text)
    derived_auth_key_hashed = db.Column(db.String(120))
    rsa_private_key_enc = db.Column(db.Text)
    rsa_public_key = db.Column(db.Text)


class File(db.Model):
    file_id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer)
    name = db.Column(db.String(120))
    type = db.Column(db.String(120))
    uuid = db.Column(db.String(120))
    size_mb = db.Column(db.FLOAT)

    # file_sha256 = db.Column(db.String(120))

    def to_json(self):
        return {
            'file_id': self.file_id,
            'user': self.user,
            'name': self.name,
            'type': self.type,
            'uuid': self.uuid,
            'size_mb': f"{round(self.size_mb, 2)} MB" if round(self.size_mb,
                                                               2) != 0 else f"{round(self.size_mb * 1024, 2)} KB"
        }


class FileContent(db.Model):
    uuid = db.Column(db.String(120), primary_key=True)
    file_enc_key = db.Column(db.TEXT)
    content = db.Column(MEDIUMTEXT)

    def to_json(self):
        return {
            'uuid': self.uuid,
            'file_enc_key': self.file_enc_key,
            'content': self.content
        }


class ShareInfo(db.Model):
    share_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    file_id = db.Column(db.Integer)
    download_count = db.Column(db.Integer)


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


@app.route('/api/salt', methods=['POST'])
def salt():
    # 先获取到前端传来的信息
    data = json.loads(request.data)
    email = data['email']

    # 检查是否已经注册
    user = User.query.filter_by(email=email).first()
    random = user.client_random if user else "server_random_here_server_random"  # 没有注册使用服务器随机数

    # padding
    enc_salt = email + random
    while len(enc_salt) < 64:
        enc_salt += "w"
    # sha256 和前端一致
    enc_salt = hashlib.sha256(enc_salt.encode()).hexdigest()

    return json.dumps({'enc_salt': enc_salt})


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
        api_token = create_access_token(identity=user_in_db.user_id)
        rsa_public_key = user_in_db.rsa_public_key
        rsa_public_key = rsa.PublicKey.load_pkcs1_openssl_pem(rsa_public_key.encode("utf-8"))
        api_token = rsa.encrypt(bytes(api_token, encoding="utf8"), rsa_public_key)
        # cipher = Cipher_pkcs1_v1_5.new(RSA.importKey(user_in_db.rsa_public_key))
        # api_token = cipher.encrypt(bytes(api_token, encoding="utf8"))
        api_token = base64.b64encode(api_token).decode()
        return json.dumps({'api_token': api_token, "master_key": user_in_db.master_key_enc,
                           "rsa_private_key": user_in_db.rsa_private_key_enc,
                           "email": user_in_db.email})
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
@jwt_required()
def upload():
    raw = request.data
    json_data = json.loads(raw)
    encrypted = json_data['encrypted']
    file_enc_key = json_data['file_key']
    name = json_data['name']
    type = json_data['type']
    # file_sha256 = json_data['file_sha256']
    size_mb = len(encrypted) / 1024 / 1024

    # 判断encrypted大小是否大于15M
    if (size_mb > 15):
        return json.dumps({"errors": [{"file": "文件过大"}]}), 500

    # 存储至数据库
    try:
        uuid = str(uuid4())
        file = File(name=name, type=type, size_mb=size_mb,
                    uuid=uuid, user=get_jwt_identity())
        db.session.add(file)
        file_content = FileContent(uuid=uuid, content=encrypted, file_enc_key=file_enc_key)
        db.session.add(file_content)
        db.session.commit()
    except Exception as e:
        return json.dumps({"errors": [{"db": ["数据库错误", str(e)]}]}), 500

    return "上传成功"


@app.route('/api/download', methods=['POST'])
@jwt_required()
def download():
    json_data = json.loads(request.data)
    file_id = json_data['id']

    # 判断文件是否存在
    file = File.query.filter_by(file_id=file_id).first()
    if not file:
        return json.dumps({'errors': {file: ["文件不存在"]}}), 500

    # 判断文件是否属于该用户
    if file.user != get_jwt_identity():
        return json.dumps({'errors': {file: ["无下载权限"]}}), 500

    # 获取文件内容
    file_content = FileContent.query.filter_by(uuid=file.uuid).first()
    return json.dumps(file_content.to_json())


@app.route('/api/share', methods=['POST'])
@jwt_required()
def share():
    db.create_all()
    json_data = json.loads(request.data)
    json_data["share_user"] = User.query.filter_by(user_id=get_jwt_identity()).first().email
    share_token = create_access_token(identity=json_data, expires_delta=False)
    # 是否有文件权限
    share_file_id = json_data['share_file_id']
    file = File.query.filter_by(file_id=share_file_id).first()
    if not file:
        return json.dumps({'errors': {"file": ["文件不存在"]}}), 500
    if file.user != get_jwt_identity():
        return json.dumps({'errors': {"file": ["无操作权限"]}}), 422

    # 若已分享，删除之前的
    share_info = ShareInfo.query.filter_by(user_id=get_jwt_identity(),
                                           file_id=share_file_id).first()
    if share_info:
        db.session.delete(share_info)

    expired_download_count = int(json_data['expired_download_count'])

    share_info = ShareInfo(user_id=get_jwt_identity(), file_id=share_file_id,
                           download_count=expired_download_count)
    db.session.add(share_info)
    db.session.commit()

    return json.dumps({"share_token": share_token})


@app.route('/api/share_info', methods=['POST'])
def share_info():
    json_data = json.loads(request.data)
    jwt = json_data['share_token']
    idt = decode_token(jwt)["sub"]

    # 判断时间是否过期
    created_timestamp = idt['created_timestamp'] / 1000
    created_time = datetime.datetime.fromtimestamp(created_timestamp)
    now_time = datetime.datetime.now()
    expired_days = idt['expired_days']
    time_delta = datetime.timedelta(days=expired_days)
    expired_date = created_time + time_delta
    if now_time > expired_date:
        return json.dumps({'errors': {"expired": [f"分享链接已经于{expired_date.strftime('%Y-%m-%d %H:%M:%S')}过期。"]}}), 422

    share_user = User.query.filter_by(email=idt["share_user"]).first()
    # 加入公钥
    if idt['share_rsa_pk']:
        idt['rsa_public_key'] = share_user.rsa_public_key

    # 加入剩余下载次数
    idt["count_left"] = ShareInfo.query.filter_by(user_id=share_user.user_id,
                                                  file_id=idt["share_file_id"]).first().download_count
    idt['share_file_id'] = create_access_token(identity=idt['share_file_id'])
    return json.dumps(idt)


@app.route('/api/share_download', methods=['POST'])
def share_download():
    json_data = json.loads(request.data)
    file_id = json_data['id']
    file_id = decode_token(file_id)['sub']

    # 判断文件是否被分享
    share_file = ShareInfo.query.filter_by(file_id=file_id).first()
    if not share_file:
        return json.dumps({'errors': {"file": ["文件未被分享"]}}), 500

    # 判断文件是否存在
    file = File.query.filter_by(file_id=file_id).first()
    if not file:
        return json.dumps({'errors': {"file": ["文件不存在"]}}), 500

    # 判断是否达到下载次数
    if share_file.download_count == 0:
        return json.dumps({'errors': {"file": ["已经达到下载次数，不可下载"]}}), 500
    else:
        share_file.download_count -= 1
        db.session.commit()

    # 获取文件内容
    file_content = FileContent.query.filter_by(uuid=file.uuid).first()
    return json.dumps({"content": file_content.to_json()["content"]})


@app.route('/api/files/', methods=['GET'])
@jwt_required()
def files():
    user = get_jwt_identity()
    files = File.query.filter_by(user=user).all()
    return json.dumps([file.to_json() for file in files])


app.run(host="0.0.0.0", port=9000)
