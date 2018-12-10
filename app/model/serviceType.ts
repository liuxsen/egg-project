// 店铺

import { Application } from 'egg';
import { Instance } from 'sequelize';

import { serviceTypeAttribute } from '../interface/index';

export default function(app: Application) {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  type ServiceTypeInstance = Instance<serviceTypeAttribute> &
    serviceTypeAttribute;

  const serviceType = app.model.define<
    ServiceTypeInstance,
    serviceTypeAttribute
  >(
    'serviceType',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      profile_id: INTEGER,
      work_type_id: INTEGER,
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
      tableName: 'service_type',
    },
  );
  return serviceType;
}
