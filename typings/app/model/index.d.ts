// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import CardPercent from '../../../app/model/CardPercent';
import CardType from '../../../app/model/CardType';
import ChargeRecord from '../../../app/model/ChargeRecord';
import Member from '../../../app/model/Member';
import ServiceItem from '../../../app/model/ServiceItem';
import TeachPercent from '../../../app/model/TeachPercent';
import Worktype from '../../../app/model/Worktype';
import Profile from '../../../app/model/profile';
import Shop from '../../../app/model/shop';
import Staff from '../../../app/model/staff';

declare module 'sequelize' {
  interface Sequelize {
    CardPercent: ReturnType<typeof CardPercent>;
    CardType: ReturnType<typeof CardType>;
    ChargeRecord: ReturnType<typeof ChargeRecord>;
    Member: ReturnType<typeof Member>;
    ServiceItem: ReturnType<typeof ServiceItem>;
    TeachPercent: ReturnType<typeof TeachPercent>;
    Worktype: ReturnType<typeof Worktype>;
    Profile: ReturnType<typeof Profile>;
    Shop: ReturnType<typeof Shop>;
    Staff: ReturnType<typeof Staff>;
  }
}
