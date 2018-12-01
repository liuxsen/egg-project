// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import BaseService from '../../../app/service/BaseService';
import Profile from '../../../app/service/profile';
import Shop from '../../../app/service/Shop';
import User from '../../../app/service/User';

declare module 'egg' {
  interface IService {
    baseService: BaseService;
    profile: Profile;
    shop: Shop;
    user: User;
  }
}
