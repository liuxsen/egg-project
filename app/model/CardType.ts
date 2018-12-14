// 店铺

import { Application } from 'egg';
import { Instance } from 'sequelize';

import { ICardTypeAttribute } from '../interface';

export default function(app: Application) {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  type CardTypeInstance = Instance<ICardTypeAttribute> & ICardTypeAttribute;

  const cardtype = app.model.define<CardTypeInstance, ICardTypeAttribute>(
    'cardType',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING,
      type: {
        type: INTEGER,
        defaultValue: 0, // 会员卡类型 0 储值卡 1 套餐卡
      },
      profile_id: INTEGER,
      remark: STRING,
      path: STRING,
      created_at: DATE,
      updated_at: DATE,
    },
    {
      underscored: true,
      // 自己定义表名字
      tableName: 'card_type',
    },
  );
  return cardtype;
}
