// 店铺

import { Application } from 'egg';
import { Instance } from 'sequelize';

import { ShopAttibutes } from '../interface';

export default function(app: Application) {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  type ShopInstance = Instance<ShopAttibutes> & ShopAttibutes;

  const shop = app.model.define<ShopInstance, ShopAttibutes>(
    'shop',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      profile_id: INTEGER,
      name: STRING,
      address: STRING,
      is_head: INTEGER,
      latitude: STRING,
      longitude: STRING,
      avatar: STRING,
      phone: STRING,
      remark: STRING,
      is_default: INTEGER,
      show_wx: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    },
    {
      underscored: true,
      // 自己定义表名字
      tableName: 'shop',
    },
  );
  return shop;
}
