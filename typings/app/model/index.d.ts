// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import ServiceItem from '../../../app/model/ServiceItem';
import Worktype from '../../../app/model/Worktype';
import Profile from '../../../app/model/profile';
import Shop from '../../../app/model/shop';
import Staff from '../../../app/model/staff';

declare module 'sequelize' {
  interface Sequelize {
    ServiceItem: ReturnType<typeof ServiceItem>;
    Worktype: ReturnType<typeof Worktype>;
    Profile: ReturnType<typeof Profile>;
    Shop: ReturnType<typeof Shop>;
    Staff: ReturnType<typeof Staff>;
  }
}
