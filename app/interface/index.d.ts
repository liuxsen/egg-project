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
