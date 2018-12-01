import { Application } from 'egg';
import { Instance } from 'sequelize';

interface ProfileAttibutes {
  id: number | null;
  email: string;
  password: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export default function(app: Application) {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  type ProfileInstance = Instance<ProfileAttibutes> & ProfileAttibutes;

  const profile = app.model.define<ProfileInstance, ProfileAttibutes>(
    'profile',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      email: STRING,
      password: STRING,
      name: STRING,
      created_at: DATE,
      updated_at: DATE,
    },
    {
      underscored: true,
      // 自己定义表名字
      tableName: 'profile',
    },
  );
  return profile;
}
