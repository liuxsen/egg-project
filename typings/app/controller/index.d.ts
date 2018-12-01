// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import BaseController from '../../../app/controller/BaseController';
import Profile from '../../../app/controller/profile';
import Shop from '../../../app/controller/shop';
import User from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    baseController: BaseController;
    profile: Profile;
    shop: Shop;
    user: User;
  }
}
