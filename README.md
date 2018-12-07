## 统一前缀 /api

### post /api/profile/register [注册]
### post /api/profile/login [登录]

接收 post 参数

+ email string 邮箱
+ password string 密码

### post /api/profile/email [获取邮箱验证码]

接收 post 参数

+ email string 邮箱


### get /user 主题首页

接收 get 参数

+ pn Number 页数
+ limit Number 每一页的主题数量

### get /user/:id [获取用户详情]

### post /user 创建用户

### delete /user/:id [删除用户]