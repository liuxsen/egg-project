export interface ShopAttibutes {
  id?: number | null;
  profile_id?: number;
  name: string;
  address: string;
  is_head: number; // 是否总店
  show_wx: number; // 是否在微信上显示
  is_default: number; // 是否默认门店
  latitude?: string; // 纬度
  longitude?: string; // 经度
  avatar: string; // 店铺头像
  remark: string; // 备注
  phone: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface UserAttibutes {
  id?: number | null;
  email: string;
  password: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ProfileAttibutes {
  id?: number | null;
  email: string;
  password: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

// 员工模型
export interface StaffAttributes {
  id?: number | null;
  shop_id: number | null;
  profile_id?: number; // 所属的店长id
  base_salary?: number; // 底薪
  name: string; // 姓名
  intro?: string; // 基本简介
  job_num?: string; // 工号
  worktype_id: number; // 工种
  phone: string; // 手机号
  weixin?: string; // 微信号
  good_at: string; // 擅长领域
  quit_time?: Date; // 离职时间
  quit_reson?: string; // 离职原因
  quit?: number; // 是否离职
  receipt_num?: number; // 接单数量
  created_at?: Date;
  updated_at?: Date;
}

// 工种
export interface worktypeAttribute {
  id?: number | null; // 工种id
  profile_id?: number; // 店长id
  shop_id: number; // 店长id
  name: string; // 工种名字
  remark?: string; // 备注
  order?: number; // 排序
  created_at?: Date;
  updated_at?: Date;
}

// 服务项目
export interface IServiceItemAttribute {
  id?: number | null; // 服务项目id
  profile_id?: number; // 店长id
  name: string; //服务项目名称
  intro?: string; //服务项目介绍
  created_at?: Date;
  updated_at?: Date;
}

// 会员卡类型
export interface ICardTypeAttribute {
  id?: number | null; // 服务项目id
  name: string; // 会员卡名字
  profile_id: number;
  type?: number; // 会员卡类型 0 储值卡 1 套餐卡
  remark?: string; // 备注
  path?: string; // 会员卡图片地址
  created_at?: Date;
  updated_at?: Date;
}

// 技师提成
export interface ITeachPercentAttribute {
  id?: number | null; // 服务项目id
  profile_id?: number;
  work_type_id: number; // 工种
  service_item_id: number; // 服务项目
  percent_type: number; // 提成类型 0 固定 1 比例
  percent: number; // 提成额度
  created_at?: Date;
  updated_at?: Date;
}

// 会员卡提成
export interface ICardPercentAttribute {
  id?: number | null; // 服务项目id
  profile_id?: number;
  work_type_id: number; // 工种
  card_type_id: number; // 卡种
  percent_type: number; // 提成类型 0 固定 1 比例
  percent: number; // 提成额度
  created_at?: Date;
  updated_at?: Date;
}

// 会员信息
export interface IMemberAttribute {
  id?: number | null; // 服务项目id
  profile_id?: number;
  shop_id: number; // 店铺id
  card_type_id: number; // 卡种
  name: string; // 姓名
  charge_amount: number; // 充值金额
  intro?: number; // 介绍人
  sex?: number; // 性别
  phone?: string; // 手机号
  birthday?: Date; // 生日
  remark?: string; // 备注
  donation_amount?: number; // 赠送金额
  integral?: number; // 积分
  created_at?: Date;
  updated_at?: Date;
}

// 充值记录
export interface IChargeRecord {
  id?: number | null; // 服务项目id
  member_id: number; // 会员id
  shop_id: number; // 门店
  price: number; // 售价
  bsn_type: number; // 业务类型 0 办卡 1 充值
  pay_type: number; // 0 微信 1 支付宝 2 现金
  profile_id?: number;
  give_item_id?: number; //赠送  服务项目id
  give?: number; // 赠送金额
  discount?: number; // 折扣
  offer?: number; //优惠金额
  pay_amount?: number; // 实付金额
  remark?: string; // 备注
  created_at?: Date;
  updated_at?: Date;
}
