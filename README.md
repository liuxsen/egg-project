
## 数据库设计方式


+ 新建 `migration npx sequelize migration:generate --name=modelName` 或者 `npm run create-migrate -- --name=modelName`
+ 修改文档 [sequelize-cli](http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html)
+ 同步数据库  `npx sequelize db:migrate` 或者 `npm run async-db`
+ 回退数据库 `npx sequelize db:migrate:undo`


```js
// egg中 model 访问是首字母大写   service 首字母小写  
// ctx.model.User
// ctx.service.servicetype
```

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