// 技师提成设置

import { Application } from 'egg';
import { Instance } from 'sequelize';

import { ITeachPercentAttribute } from '../interface';

export default function(app: Application) {
  const { INTEGER, DATE } = app.Sequelize;
  type TeachPercentInstance = Instance<ITeachPercentAttribute> &
    ITeachPercentAttribute;

  const teachPercent = app.model.define<
    TeachPercentInstance,
    ITeachPercentAttribute
  >(
    'teachPercent',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      profile_id: INTEGER, // 店长id
      work_type_id: INTEGER, // 工种id
      service_item_id: INTEGER, // 服务项目id
      percent: INTEGER, // 提成
      percent_type: {
        type: INTEGER,
        defaultValue: 0, //  提成类型 0 固定 1 比例
      },
      created_at: DATE,
      updated_at: DATE,
    },
    {
      underscored: true,
      // 自己定义表名字
      tableName: 'teach_percent',
    },
  );
  teachPercent.associate = function() {
    teachPercent.belongsTo(app.model.Worktype);
    teachPercent.belongsTo(app.model.ServiceItem);
  };
  return teachPercent;
}
