// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import BaseController from '../../../app/controller/BaseController';
import CardPercent from '../../../app/controller/CardPercent';
import CardType from '../../../app/controller/CardType';
import ChargeRecord from '../../../app/controller/ChargeRecord';
import Member from '../../../app/controller/Member';
import ServiceItem from '../../../app/controller/ServiceItem';
import Staff from '../../../app/controller/Staff';
import TeachPercent from '../../../app/controller/TeachPercent';
import Base from '../../../app/controller/base';
import Profile from '../../../app/controller/profile';
import Shop from '../../../app/controller/shop';
import User from '../../../app/controller/user';
import Worktype from '../../../app/controller/worktype';

declare module 'egg' {
  interface IController {
    baseController: BaseController;
    cardPercent: CardPercent;
    cardType: CardType;
    chargeRecord: ChargeRecord;
    member: Member;
    serviceItem: ServiceItem;
    staff: Staff;
    teachPercent: TeachPercent;
    base: Base;
    profile: Profile;
    shop: Shop;
    user: User;
    worktype: Worktype;
  }
}
