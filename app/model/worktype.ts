// 工种 model
import { Application } from 'egg';
import { Instance } from 'sequelize';

import { worktypeAttribute } from '../interface';

export default function(app: Application) {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  type WorktypeInstance = Instance<worktypeAttribute> & worktypeAttribute;

  const worktype = app.model.define<WorktypeInstance, worktypeAttribute>(
    'worktype',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      shop_id: INTEGER,
      profile_id: INTEGER,
      order: INTEGER,
      name: STRING,
      remark: STRING,
      created_at: DATE,
      updated_at: DATE,
    },
    {
      underscored: true,
      // 自己定义表名字
      tableName: 'work_type',
    },
  );

  worktype.associate = function() {
    // service_item 中有 work_type_id 作为外键
    worktype.hasMany(app.model.ServiceItem);
  };
  return worktype;
}
