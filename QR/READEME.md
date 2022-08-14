## 基于网页的用户注册与登录系统

### 一、过程说明

#### 注册过程：

- **1.账户信息设置（设置邮箱、密码）：**

①在注册时，用户再次输入他们的电子邮件**Email**、密码**Passoword**和确认密码**Re-Password** ，以确认它们是否相同。密码条目必须完全匹配，否则用户无法继续。

②电子邮件地址在客户端和API端最多被限制为1190个字符。

③客户端将允许注册最低长度为密码长度至少为8，ZXCVBN评级>1 ，且需包含数字、字母和特殊字符，防止弱口令枚举。

④在输入至少8个字符后，通过正则表达式检查字符是否长度至少为8，且需包含数字、字母和特殊字符。如果还没有输入8个字符，应用程序将在输入字段时用字段旁边的红色文本表示“密码长度至少为8，且需包含数字、字母和特殊字符”。

⑤再输入一次密码，进行密码确认。若两次输入密码不一致，应用程序将在输入字段时用字段旁边的红色文本表示“密码不一致”。

- **2.Salt生成（根据Email与客户端随机数生成Salt）：**

①生成一个客户端随机数**Client Random Value** （32字符）：客户端随机数是在本地使用crypto.getRandomValues()生成长度为128bits的随机数，用于计算**salt**，同时会明文存储于数据库中。例：`3a723e2bb9eeebe9e597b4ff4e8e8a39`

②进行填充字符串Padding （64字符）：将邮箱和客户端随机字符串组合后，使用字符w填充至长度为64的字符串。保证每次计算规模一致，使所有SHA-256计算有相同的计算时间，防止时间攻击。例：`1712444252@cuc.edu.cn3a723e2bb9eeebe9e597b4ff4e8e8a39wwwwwwwwwww`

③生成Salt（64字符）：Salt = SHA-256(Padding+Client Random Value) 

，SHA-256(填充字符串)，用于后续密码加密，密码加密防彩虹表。Salt不会被发送至服务端，服务端只存储客户端随机数，每次重新计算Salt，防止枚举攻击。例：`0c4df39786674d557b2402c0ff6664665f51ee55ace24c55bbb22b36b126a898`

- **3.衍生密钥生成（根据密码、Salt生成衍生密钥）：**

①生成衍生密钥**Derived Key** （256字符）：根据设定的密码及上一步生成的Salt生成的衍生密钥，`PBKDF2-HMAC-SHA-512(Password,Salt,Iterations=100000,Length=256bits) `。例：`6d0175652369dfe4779db2c44445cbd0ce5dcbaa58e87154c2f3b527e1ec9264a4d22973c29179fd5a3d32386c13cca44d3c7b8e657936ea4b4c69cd4e425029b2a98990f6fd2d491600647563fe73699e22754f051582fb4224fda0be8d78e2002da00a5217cc0054a5fe1ac2570d1edc489f87df6a5799e1ea681b53a4f48a`

②衍生加密密钥**Derived Encryption Key** （128字符）：衍生密钥的前半部分，用于加密账户主密钥 Master Key，`Derived Encryption Key = Derived Key[:128] `。例：`6d0175652369dfe4779db2c44445cbd0ce5dcbaa58e87154c2f3b527e1ec9264a4d22973c29179fd5a3d32386c13cca44d3c7b8e657936ea4b4c69cd4e425029`

③衍生认证密钥**Derived Authentication Key**（128字符）：衍生密钥的后半部分，用于后续和API通信过程中证明身份，`Derived Authentication Key = Derived Key[129:] `。例：`b2a98990f6fd2d491600647563fe73699e22754f051582fb4224fda0be8d78e2002da00a5217cc0054a5fe1ac2570d1edc489f87df6a5799e1ea681b53a4f48a`

④衍生认证密钥哈希值**Hashed Authentication Key**（32字符）：衍生认证密钥的哈希值Hashed Authentication Key，将发送并存储于服务器，用于登录时比对。使用MD5算法。例：`705a073dc97cf893e00b033bfebde1d1`

- **4.主密钥生成：**

①生成主密钥**Master Key**（32字符）：账户主密钥，CSPRNG随机数，Crypto.getRandomValues()生成。用于文件加解密等操作。主密钥作为找回账户的唯一凭证。例：`bb28de6ed4f183db43d8c38290150d0c`

②加密主密钥（128字符）：使用上一步生成的衍生加密密钥进行加密后的主密钥，使用AES-ECB算法，`Encrypted Master Key = AES-ECB(Derived Encryption Key,Master Key)`。例：`53616c7465645f5f9845000c1a018adcf78e3d89a907a4cf7c37f1f43339167d4c20588bc5202ceb27ebeecd619c45da2801a0aeda2c6b3d9f64eaae916f3506`

③生成RSA公钥（799字符）：随机生成的RSA公钥，将明文发送和存储至服务器，用于他人验证签名。例：`-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAu7Vh1L6sq+V9eyFEg806
rtMi36dwe+Rl1/JXBK1uagdpu5lXe4JHTiS17NqSCycXEBRpIE2mdx5zDHIpjWtZ
O60e2dzTi+axAYomVREtTWPDNRXb62Zroy06hMvnRfcmrMHx2BBgzhVzbli5Hhhu
LapovMmniOP7Xs/4dyNoJSxGVOak3UWfTXIZJW6TI4NTEgbP8/MLFCXQEjhgmEkE
OCnR5jbaHjnMOzu2utu0E4YNRt0dWdNiBt9Ln8phAMRExECiFy4OI1EeunafUrC9
DADd/QOpKXjwr61q9Okp0CZm7vkGabkqszHz2TUcWrd+Vwlu3PjFgd0K//Xh6YZf
U3NAPoo/LzGF3aoBO3Dc5AB4dlUlieuklu20xBB8eWAuVRgr9EdQxQwoF0P++tr7
xWIHUSge5oS2LoUvgT1HIKr4+rMIiG+2UBp+qeGY4LAyyI7J2e5oT9bjVzlXyZC6
UkPoeetxmnI+4RMh4jaECuXAYEg8Qb/UNhOj/0YWzmLSHfZwe+wweyfrjTaoKWNr
uBZeroISkqVAcvvLpAA3mf7WOkzkjGT9iRkv2ejsQ3HqNTrr0d5DNlb/AHW8ITeb
aQp8NX2WKX3MikVPiQr0WedbWtp6m1n1g8cD62G2n0S9ITuaQgHt9pDvgyiTMRfO
SvJCj4bxncVquyNswnZJyHkCAwEAAQ==
-----END PUBLIC KEY-----`

④生成RSA私钥（3271字符）：随机生成的RSA私钥，用于文件签名。

⑥加密RSA私钥（4396字符）：使用主密钥加密后的RSA私钥，AES-ECB算法，将发送和存储至服务器。

- **5.完成（提交注册）：**

将以下信息发送至服务器且保存：

- Email
- 客户端随机数Client Random Value
- 加密后主密钥Encrypted Master Key 
- 衍生认证密钥哈希值Hashed Authentication Key
- RSA公钥
- 加密后RSA私钥

注：Salt不会发送到API，因为这总是从客户端随机值计算出来的，而是每次使用**Client Random Value**计算。

#### 登录过程：

①用户必须在本地客户端界面中输入其电子邮件和密码，根据注册规则进行校验，密码长度至少为8位，如果还没有输入8个字符，应用程序将在输入字段时用字段旁边的红色文本表示“Password must be at least 8 characters”。**发送Email**。

②电子邮件被发送到后端。在数据库中搜索对应的Email，若Email已经注册，使用数据库中的Client Random Value计算Salt，**Salt** (computed by SHA-256( “**mega.nz**” || “**Padding**” || **Client Random Value** )；若Email未注册，使用Server Random Value（一次生成多次使用）计算Salt，**Salt** (computed by SHA-256( **Email** || “**mega.nz**” || “**Padding**” || **Server Random Value** )。**返回Salt**。

注：Email长度<1190，使得Padding可以填充到200字符，保证SHA-256计算时间一致，防止时间攻击；防止用户名枚举；加入0~50ms随机延迟，50 ms是搜索所有数据库记录而找不到结果的最长时间。这有助于不通过测量来自数据库响应的延迟来向攻击者透露电子邮件是否有效；收到的电子邮件被限制为有效的电子邮件，最大大小为1190个字符，否则请求被拒绝。这也可以防止API散列大量数据，并防止DOS攻击。

③前端计算登录参数：

- 计算**Derived Key**，PBKDF2-HMAC-SHA-512(**Password**,**Salt**,**Iterations**=100000,**Length**=256bits)；
- 派生加密密钥 **Derived Encryption Key** 是派生的密钥的前半部分（128）位
- 获取身份验证密钥**Authentication Key** ，这是派生密钥的后半部分（128位），Authentication Key = Derived Key[129:]；
- 发送登录请求：
  - **Email**
  - **Authentication Key**

④后端进行登录验证：

- 计算**Hashed Authentication Key** ：Hashed Authentication Key = SHA-256(Derived Authentication Key)。
- 比对**Hashed Authentication Key**：若一致，返回**Encrypted Master Key**、**Encrypted Private RSA Key**、**Encrypted Sess ID**；若不一致，返回登录失败

注：后端不存储明文Authentication Key，只存储哈希后的值，以防止“pass the hash”攻击，只要收到就立刻进行哈希计算。同时使用Double HMAC验证防止时间攻击。服务器总是散列从客户端接收到的认证密钥，以防止此攻击向量。

⑤前端进行参数解密：

- 获取**Derived Encryption Key**：Derived Encryption Key = Derived Key[:128]
- 解密**Master Key**：AES-ECB，Derived Encryption Key
- 客户端将使用派生加密密钥 **Derived Encryption Key**来解密已加密的主密钥 **Encrypted Master Key** 。然后，主密钥**Master Key**将用于解密RSA私钥 **RSA Private Key**。然后，将使用RSA私钥来解密会话标识符**Session Identifier**。会话标识符是由API在每个登录会话中生成的一个随机字符串（令牌），它被加密到用户的RSA公钥 **RSA Public Key**.中。
- 在所有后续的API请求中，用户必须通过TLS连接将其未加密的会话标识符发送到该API。如果用户没有发送正确的会话标识符或它没有被正确地解密，他们将无法下载任何用户帐户数据，如相关信息、加密的文件和文件属性等。

### 二、完成情况

- [x] 使用https绑定证书到域名而非IP地址 【 *PKI* *X.509* 】
- [x] 允许用户注册到系统
  - [x] 用户名的合法字符集范围：中文、英文字母、数字
  - [x] 类似：-、_、.等合法字符集范围之外的字符不允许使用

- [x] 用户口令长度限制在36个字符之内
- [x] 对用户输入的口令进行强度校验，禁止使用弱口令
- [x] 使用合法用户名和口令登录系统
- [x] 禁止使用明文存储用户口令 【 PBKDF2 散列算法 慢速散列 针对散列算法（如MD5、SHA1等）的攻击方法 】
  - [x] 存储的口令即使被公开，也无法还原/解码出原始明文口令

- [x] （可选）安全的忘记口令 / 找回密码功能

### 三、个人主要贡献及自认为有技术含量的工作

- 完成用户注册与登陆部分
- 解决加密时运算时间过长导致页面卡死问题

### 四、印象深刻的bug 和解决方法

①JS无法生成安全随机数

解决办法：使用现代浏览器crypto.getRandomValues()方法

参考链接：[(41条消息) JS 安全随机数 window.crypto及其兼容性_柚子君.的博客-CSDN博客_window.crypto](https://blog.csdn.net/gengkui9897/article/details/106344417)



②使用crypto库前后端加密结果不一致

解决办法：改用CryptoJS库

参考链接：[前端加密JS库--CryptoJS 使用指南 - Tommy_marc - 博客园 (cnblogs.com)](https://www.cnblogs.com/tommymarc/p/13187435.html)



③加密时运算时间过长导致页面卡死

解决办法：使用Vuex的Action异步操作

参考链接：[(41条消息) Vuex Action异步操作_每一天，每一步的博客-CSDN博客_vuex 异步](https://blog.csdn.net/u010234868/article/details/120655284)



④前一步页面数据切换页面时丢失

解决办法：使用Vuex状态管理

解决方法：[(41条消息) vue3 关于使用vuex做状态管理，页面刷新后数据丢失解决办法_听说这有个小白的博客-CSDN博客_vuex刷新数据丢失原因](https://blog.csdn.net/weixin_46466247/article/details/117129804)