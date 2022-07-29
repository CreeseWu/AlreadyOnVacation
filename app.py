import datetime
from flask import Flask
from flask_restful import reqparse, abort, Api, Resource, request
from flask_cors import *
import os
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, decode_token
from flask_jwt_extended import JWTManager
import base64
import json
import rsa

# 数据库建表、连接 最多
# 注册、登录、salt 中间
# 文件上传、下载 最少

app = Flask(__name__, static_folder='dist', static_url_path='/')
app.config["SECRET_KEY"] = "wujie!"
CORS(app, supports_credentials=True)
api = Api(app)
jwt = JWTManager(app)


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
    data = request.data
    # 解析json格式的数据
    data = json.loads(data)
    email = data['email']

    # 根据Email生成Salt（注册的Email，，没有注册的Emal。。）
    # 返回Salt

    # 成功示例：
    return json.dumps({'enc_salt': "adsfasfasfasdfasf"})

    # 失败示例
    # return json.dumps({'errors': 'failed'}), 500


@app.route('/api/login', methods=['POST'])
def login():
    # 获取传过来的Email和认证密钥
    # 将认证密钥哈希
    # 从数据库里找存的值，和哈希后的认证密钥对比
    # 如果错误 返回错误
    # 如果正确 使用JWT生成一个token
    # 将生成的token使用数据库中明文存储的RSA公钥加密
    # 将加密后的Token和数据库中加密后的RSA私钥返回
    api_token  = create_access_token(identity='wujie')
    return json.dumps({'api_token': api_token})


@app.route('/api/register', methods=['POST'])
def register():
    # 这里写注册的逻辑
    # 先获取到前端传来的信息
    data = request.data
    # 解析json格式的数据
    data = json.loads(data)

    # 拿到【客户端随机数、Email、加密后的主密钥、认证密钥】
    # 检查 e.g. email是否已经注册过等
    # 存到数据库里面
    # 返回信息
    return ""


@app.route('/api/verify_token', methods=['POST'])
def verify_token():
    data = request.data
    data = json.loads(data)
    api_token = data['api_token']
    return json.dumps({'api_token': api_token})

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

    return json.dumps({"errors": [{"file":"file is too large"}]}),500


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


app.run(host="0.0.0.0", port=9000)
