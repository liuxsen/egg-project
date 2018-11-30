import { Application } from 'egg';
import { Instance } from 'sequelize';

interface UserAttibutes {
  id: number | null;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
}

export default function(app: Application) {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  type UserInstance = Instance<UserAttibutes> & UserAttibutes;

  const user = app.model.define<UserInstance, UserAttibutes>(
    'user',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    },
    {
      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at 下划线格式
      underscored: true,
      // 自己定义表名字
      tableName: 'user',
    },
  );
  return user;
}
