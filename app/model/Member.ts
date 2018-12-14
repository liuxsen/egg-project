// 会员信息

import { Application } from 'egg';
import { Instance } from 'sequelize';

import { IMemberAttribute } from '../interface';

export default function(app: Application) {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  type MemberInstance = Instance<IMemberAttribute> & IMemberAttribute;

  const member = app.model.define<MemberInstance, IMemberAttribute>(
    'member',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      profile_id: INTEGER,
      shop_id: INTEGER,
      card_type_id: INTEGER,
      intro: INTEGER,
      name: STRING,
      sex: {
        type: INTEGER,
        defaultValue: 0, // 0 女 1 男
      },
      phone: STRING,
      birthday: DATE,
      remark: STRING,
      charge_amount: INTEGER,
      donation_amount: INTEGER,
      integral: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    },
    {
      underscored: true,
      // 自己定义表名字
      tableName: 'member',
    },
  );

  member.associate = function() {
    member.belongsTo(app.model.Shop);
    member.belongsTo(app.model.CardType);
    // 介绍人 会员 自己关联自己
    member.belongsTo(app.model.Member, {
      as: 'introInfo',
      foreignKey: 'intro',
    });
  };

  return member;
}
