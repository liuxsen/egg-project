// 店铺

import { Application } from 'egg';
import { Instance } from 'sequelize';

import { StaffAttributes } from '../interface/index';

export default function(app: Application) {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  type StaffInstance = Instance<StaffAttributes> & StaffAttributes;

  const staff = app.model.define<StaffInstance, StaffAttributes>(
    'staff',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      shop_id: INTEGER, // 店铺id
      profile_id: INTEGER, // 店长id
      name: STRING, // 姓名
      intro: STRING, // 基本简介
      job_num: STRING, // 工号
      work_type_id: INTEGER, // 工种
      phone: STRING, // 手机号
      weixin: STRING, // 微信号
      good_at: STRING, // 擅长领域
      quit_time: DATE, // 离职时间
      quit_reson: STRING, // 离职原因
      quit: INTEGER, // 是否离职
      receipt_num: INTEGER, // 接单数量
      base_salary: INTEGER, // 底薪
      created_at: DATE,
      updated_at: DATE,
    },
    {
      underscored: true,
      // 自己定义表名字
      tableName: 'staff',
    },
  );
  return staff;
}
