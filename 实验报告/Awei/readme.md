# 实现文件分享功能

### 一、具体工作内容

#### 1. 分享者发起分享请求，设定分享参数

**参数处理方法：**

- 不用入数据库的参数，如分享内容、分享者等，直接置于 URL 中，使用 JWT 编码。
  
  - > **JWT 编码的原理**：服务器认证以后，生成一个 JSON 对象，发回给用户。以后，用户与服务端通信的时候，都要发回这个 JSON 对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名。服务器就不保存任何 session 数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。

- 需要入教据库的，如剩余下载次数，在用户获取分享信息时，从数据库调取。
  
  - 数据库中存储分享信息的 Shareinfo 表：
    
    | Name           | Type    | Primary Key | Unique | Foreign Key |
    |:--------------:|:-------:|:-----------:|:------:|:-----------:|
    | share_id       | Integer | True        | True   | False       |
    | user_id        | Integer | False       | False  | True        |
    | file_id        | Integer | False       | False  | True        |
    | download_count | Integer | False       | False  | False       |

#### 2. 后端检查分享权限，检查参数是否合理

- 检查文件是否存在。

- 检查用户是否有操作权限。
  
  - `get_jwt_identity()` 用来根据令牌取得之前的 identity 信息，验证用户的身份。
  
  ```python
  # 是否有文件权限
      share_file_id = json_data['share_file_id']
      file = File.query.filter_by(file_id=share_file_id).first()
      if not file:
          return json.dumps({'errors': {"file": ["文件不存在"]}}), 500
      if file.user != get_jwt_identity():
          return json.dumps({'errors': {"file": ["无操作权限"]}}), 422
  ```

#### 3. 将分享者发送的 json 使用 jwt 签名后，作为分享口令下发前端

- 主要在 `/api/share` 接口中实现。

- 将分享者发送的 json 作为 jwt 的 identity，`share_token` 即为 jwt 签名后的字段。
  
  ```python
  json_data = json.loads(request.data)
  json_data["share_user"] = User.query.filter_by(user_id=get_jwt_identity()).first().email
  share_token = create_access_token(identity=json_data, expires_delta=False)
  ```

- 检查分享权限。

- 检查是否已经分享，若已经分享，则删除之前的分享信息。

- 在分享信息中加入用户 ID、文件 ID、已到期的下载次数字段。

- 将 `share_token` 作为分享口令下发前端。
  
  ```python
   return json.dumps({"share_token": share_token})
  ```

#### 4. 前端展示 url 下载时的步骤

- 主要在 `/api/share_info` 接口中实现。

- 下载者访问链接。

- 前端 js 发起请求，带上分享口令。

- 后端 jwt 解密口令`share_token`。
  
  ```python
  json_data = json.loads(request.data)
  jwt = json_data['share_token']
  idt = decode_token(jwt)["sub"]
  ```

- 判断是否符合下载设定。
  
  - 判断时间是否过期。
    
    ```python
    created_timestamp = idt['created_timestamp'] / 1000
    created_time = datetime.datetime.fromtimestamp(created_timestamp)
    now_time = datetime.datetime.now()
    expired_days = idt['expired_days']
    time_delta = datetime.timedelta(days=expired_days)
    expired_date = created_time + time_delta
    if now_time > expired_date:
        return json.dumps({'errors': {"expired": [f"分享链接已经于{expired_date.strftime('%Y-%m-%d %H:%M:%S')}过期。"]}}), 422
    
    share_user = User.query.filter_by(email=idt["share_user"]).first()
    ```

- 加入需要从数据库中调取的字段。
  
  - 加入公钥。
    
    ```python
    if idt['share_rsa_pk']:
            idt['rsa_public_key'] = share_user.rsa_public_key
    ```
  
  - 加入剩余下载次数。
    
    ```python
    idt["count_left"] = ShareInfo.query.filter_by(user_id=share_user.user_id,file_id=idt["share_file_id"]).first().download_count
    idt['share_file_id'] = create_access_token(identity=idt['share_file_id'])
    ```

- 向前端返回解密后的口令 `idt`
  
  ```python
  return json.dumps(idt)
  ```

#### 5. 返回文件信息

- 主要在 `/api/share_download` 接口中实现。

- 判断是否符合下载设定。
  
  - 判断文件是否被分享。
    
    ```python
    share_file = ShareInfo.query.filter_by(file_id=file_id).first()
    if not share_file:
        return json.dumps({'errors': {"file": ["文件未被分享"]}}), 500
    ```
  
  - 判断文件是否存在。
    
    ```python
    file = File.query.filter_by(file_id=file_id).first()
    if not file:
        return json.dumps({'errors': {"file": ["文件不存在"]}}), 500
    ```
  
  - 判断是否达到下载次数。
    
    ```python
    if share_file.download_count == 0:
        return json.dumps({'errors': {"file": ["已经达到下载次数，不可下载"]}}), 500
    ```

- 获取文件内容
  
  ```python
  file_content = FileContent.query.filter_by(uuid=file.uuid).first()
  ```

- 返回文件信息
  
  ```python
  return json.dumps({"content": file_content.to_json()["content"]})
  ```

#### 6. 若分享者设定明文分享，则信息中包含加密密钥，使用该密钥解密出文件

### 二、实验中遇到的问题及解决方法

| 问题               | 解决方法                      |
|:----------------:|:-------------------------:|
| 剩余下载次数无法使用消息签名验证 | 数据库建表，每次从数据库中调取           |
| 获取文件信息时过慢        | 拆表，将文件信息和文件内容分表存储         |
| 分享者可能伪造分享信息      | 分享者信息通过JWT获取，不通过前端传入的JSON |
| 可能导致分享被枚举        | 将文件ID加密，符合下载条件时下发，设定过期时间  |

### 三、参考资料

- [JSON Web Token 入门教程- 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
- [Basic Usage &#8212; flask-jwt-extended 4.4.3 documentation](https://flask-jwt-extended.readthedocs.io/en/stable/basic_usage/)
- [python.ReportClient.ShareInfo - ManageEngine](https://www.manageengine.com/analytics-plus/api/python/python.ReportClient.ShareInfo-class.html)
- [ SQLAlchemy create_all() does not create tables - Stack Overflow](https://stackoverflow.com/questions/20744277/sqlalchemy-create-all-does-not-create-tables)
- [Using the Session — SQLAlchemy 1.4 Documentation](https://docs.sqlalchemy.org/14/orm/session.html)




