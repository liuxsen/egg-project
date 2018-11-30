// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import BaseService from '../../../app/service/BaseService';
import User from '../../../app/service/User';

declare module 'egg' {
  interface IService {
    baseService: BaseService;
    user: User;
  }
}
