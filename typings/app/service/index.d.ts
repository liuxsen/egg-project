// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import BaseService from '../../../app/service/BaseService';
import Profile from '../../../app/service/Profile';
import ServiceItem from '../../../app/service/ServiceItem';
import Shop from '../../../app/service/Shop';
import Staff from '../../../app/service/Staff';
import Worktype from '../../../app/service/Worktype';

declare module 'egg' {
  interface IService {
    baseService: BaseService;
    profile: Profile;
    serviceItem: ServiceItem;
    shop: Shop;
    staff: Staff;
    worktype: Worktype;
  }
}
