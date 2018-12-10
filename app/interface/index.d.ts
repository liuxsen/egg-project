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
  work_type_id: number; // 工种
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
export interface serviceTypeAttribute {
  id?: number | null; // 服务项目id
  profile_id?: number; // 店长id
  work_type_id: number; //工种
  name: string; //服务项目名称
  percentage_type: number; // 提成类型 0 比例 1 固定值
  individual: number; // 散客提成
  member: number; // 会员提成
  created_at?: Date;
  updated_at?: Date;
}
