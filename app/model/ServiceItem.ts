// 店铺

import { Application } from 'egg';
import { Instance } from 'sequelize';

import { IServiceItemAttribute } from '../interface';

export default function(app: Application) {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  type ServiceItemInstance = Instance<IServiceItemAttribute> &
    IServiceItemAttribute;

  const serviceItem = app.model.define<
    ServiceItemInstance,
    IServiceItemAttribute
  >(
    'serviceItem',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      profile_id: INTEGER,
      worktype_id: INTEGER,
      name: STRING,
      percentage_type: INTEGER,
      individual: INTEGER,
      member: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    },
    {
      underscored: true,
      // 自己定义表名字
      tableName: 'service_item',
    },
  );
  // 关联
  serviceItem.associate = function() {
    // service_item 表中 有work_type_id 作为外键
    serviceItem.belongsTo(app.model.Worktype);
  };
  return serviceItem;
}
