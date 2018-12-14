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
      name: STRING,
      intro: STRING,
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
    serviceItem.hasMany(app.model.TeachPercent);
  };
  return serviceItem;
}
