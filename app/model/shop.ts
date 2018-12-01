// 店铺

import { Application } from 'egg';
import { Instance } from 'sequelize';

interface ShopAttibutes {
  id: number | null;
  profile_id: number;
  name: string;
  address: string;
  is_head: string;
  latitude: string; // 纬度
  longitude: string; // 经度
  avatar: string; // 店铺头像
  remark: string; // 备注
  created_at?: Date;
  updated_at?: Date;
}

export default function(app: Application) {
  const { INTEGER, STRING, DATE, BOOLEAN } = app.Sequelize;
  type ShopInstance = Instance<ShopAttibutes> & ShopAttibutes;

  const shop = app.model.define<ShopInstance, ShopAttibutes>(
    'shop',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      profile_id: INTEGER,
      name: STRING,
      address: STRING,
      is_head: BOOLEAN,
      latitude: STRING,
      longitude: BOOLEAN,
      avatar: STRING,
      remark: STRING,
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
