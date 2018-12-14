// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import BaseService from '../../../app/service/BaseService';
import CardPercent from '../../../app/service/CardPercent';
import CardType from '../../../app/service/CardType';
import ChargeRecord from '../../../app/service/ChargeRecord';
import Member from '../../../app/service/Member';
import Profile from '../../../app/service/Profile';
import ServiceItem from '../../../app/service/ServiceItem';
import Shop from '../../../app/service/Shop';
import Staff from '../../../app/service/Staff';
import TeachPercent from '../../../app/service/TeachPercent';
import Worktype from '../../../app/service/Worktype';

declare module 'egg' {
  interface IService {
    baseService: BaseService;
    cardPercent: CardPercent;
    cardType: CardType;
    chargeRecord: ChargeRecord;
    member: Member;
    profile: Profile;
    serviceItem: ServiceItem;
    shop: Shop;
    staff: Staff;
    teachPercent: TeachPercent;
    worktype: Worktype;
  }
}
