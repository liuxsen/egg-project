// 会员充值记录

import { Application } from 'egg';
import { Instance } from 'sequelize';

import { IChargeRecord } from '../interface';

export default function(app: Application) {
  const { INTEGER, DATE, STRING } = app.Sequelize;
  type ChargeRecordInstance = Instance<IChargeRecord> & IChargeRecord;

  const chargeRecord = app.model.define<ChargeRecordInstance, IChargeRecord>(
    'charge_record',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      profile_id: INTEGER, // 店长id
      member_id: INTEGER, // 会员id
      shop_id: INTEGER, // 门店
      give_item_id: INTEGER, // 赠送服务项目id
      pay_type: INTEGER, // 0 微信 1 支付宝 2 现金
      bsn_type: INTEGER, // 业务类型 0 办卡 1 充值
      price: INTEGER, // 售价
      give: INTEGER, // 赠送金额
      discount: INTEGER, // 折扣
      offer: INTEGER, // 优惠金额
      pay_amount: INTEGER, // 实付金额
      remark: STRING, // 备注
      created_at: DATE,
      updated_at: DATE,
    },
    {
      underscored: true,
      // 自己定义表名字
      tableName: 'charge_record',
    },
  );
  chargeRecord.associate = function() {
    chargeRecord.belongsTo(app.model.Shop);
    chargeRecord.belongsTo(app.model.ServiceItem, {
      foreignKey: 'give_item_id',
      as: 'giveItem', // 赠送项目
    });
    chargeRecord.belongsTo(app.model.Member);
  };

  return chargeRecord;
}
