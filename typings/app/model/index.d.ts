// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Profile from '../../../app/model/profile';
import Shop from '../../../app/model/shop';
import Staff from '../../../app/model/staff';
import User from '../../../app/model/user';

declare module 'sequelize' {
  interface Sequelize {
    Profile: ReturnType<typeof Profile>;
    Shop: ReturnType<typeof Shop>;
    Staff: ReturnType<typeof Staff>;
    User: ReturnType<typeof User>;
  }
}
