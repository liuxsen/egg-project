
## 项目启动方式

+ `docker-compose up -d`
+ `npm run dev`


## 数据库设计方式

+ 新建迁移 `migration npx sequelize migration:generate --name=modelName` 或者 `npm run create-migrate -- --name=modelName`
+ 修改文档 [sequelize-cli](http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html)
+ 同步数据库  `npx sequelize db:migrate` 或者 `npm run async-db`
+ 回退数据库 `npx sequelize db:migrate:undo` 或者 `npm run undo-db`

### model 定义注意事项

+ underscored: true, // 采用蛇形定义
+ timestamps: false, // 不适用updated_at created_at 字段
+ tableName: 'charge_record', // 自己定义表名字


### model 操作

#### 增删改查注意

> 通过Sequelize获取的模型对象都是一个DAO（Data Access Object）对象，这些对象会拥有许多操作数据库表的实例对象方法（比如：save、update、destroy等），需要获取“干净”的JSON对象可以调用get({'plain': true})。


#### 定义model关联关系

```js
// worktype.ts
  worktype.associate = function() {
    // service_item 中有 work_type_id 作为外键
    worktype.hasMany(app.model.ServiceItem);
  };
// serviceitem.ts
serviceItem.associate = function() {
  // service_item 表中 有work_type_id 作为外键
  serviceItem.belongsTo(app.model.Worktype);
  // 如果是自己关联自己
  // 介绍人 会员 自己关联自己
  member.belongsTo(app.model.Member, {
    as: 'introInfo', // 返回的字段信息
    foreignKey: 'intro', // member的 外键
  });
};
```

#### 关联关系查询

``` js
// controller/servicitem.ts
// 获取服务项目
public async index() {
  this.ctx.body = await this.ctx.service.serviceItem.index(
    this.ctx.queries,
    this.getName(),
    ['Worktype'],
  );
}
// /service-item/:id
public async show() {
  this.ctx.body = await this.ctx.service.serviceItem.findOne(
    this.ctx.queries,
    this.getName(),
    ['Worktype', 
      {
        name: 'Member', // 关联模型
        as: 'introInfo', // 返回字段名称
      },
    ],
  );
}

// controller/worktype.ts
// 获取服务项目
  public async index() {
    this.ctx.body = await this.ctx.service.worktype.index(
      this.ctx.queries,
      this.getName(),
      ['ServiceItem'],
    );
  }
  public async show() {
    this.ctx.body = await this.ctx.service.worktype.findOne(
      this.ctx.queries,
      this.getName(),
      ['ServiceItem'],
    );
  }
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


### get /shop 获取店铺列表

接收 get 参数 `支持分页参数`

+ pn Number 页数
+ limit Number 每一页的主题数量

### get /user/:id [获取用户详情]

### post /user 创建用户

### delete /user/:id [删除用户]



### 目前存在model

+ profile
+ serviceitem
+ shop
+ staff
+ worktype

## git 操作

+ [用git commit --amend命令修改提交信息](https://itbilu.com/other/relate/NkwVgPTbl.html)
+ [git reset HEAD撤消add暂存区文件和git checkout撤消文件修改](https://itbilu.com/other/relate/Ek6phDaZg.html)

## 业务方面

+ 开始时间 结束时间 