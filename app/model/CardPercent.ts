// 技师提成设置

import { Application } from 'egg';
import { Instance } from 'sequelize';

import { ICardPercentAttribute } from '../interface';

export default function(app: Application) {
  const { INTEGER, DATE } = app.Sequelize;
  type CardPercentInstance = Instance<ICardPercentAttribute> &
    ICardPercentAttribute;

  const cardPercent = app.model.define<
    CardPercentInstance,
    ICardPercentAttribute
  >(
    'card_percent',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      profile_id: INTEGER, // 店长id
      work_type_id: INTEGER, // 工种id
      card_type_id: INTEGER, // 卡种id
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
      tableName: 'card_percent',
    },
  );
  cardPercent.associate = function() {
    cardPercent.belongsTo(app.model.Worktype);
  };
  return cardPercent;
}
