import BaseController from './BaseController';

export default class ChargeRecordController extends BaseController {
  public async index() {
    this.ctx.body = await this.ctx.service.chargeRecord.index(
      this.ctx.queries,
      this.getName(),
      [
        'Shop',
        'Member',
        {
          name: 'ServiceItem',
          as: 'giveItem',
        },
      ],
    );
  }
  public async show() {
    this.ctx.body = await this.ctx.service.chargeRecord.findOne(
      this.ctx.queries,
      this.getName(),
      [
        'Shop',
        'Member',
        {
          name: 'ServiceItem',
          as: 'giveItem',
        },
      ],
    );
  }
}
