import BaseController from './BaseController';

export default class TeachPercentController extends BaseController {
  public async index() {
    this.ctx.body = await this.ctx.service.teachPercent.index(
      this.ctx.queries,
      this.getName(),
      ['ServiceItem', 'Worktype'],
    );
  }
  public async show() {
    this.ctx.body = await this.ctx.service.teachPercent.findOne(
      this.ctx.queries,
      this.getName(),
      ['ServiceItem', 'Worktype'],
    );
  }
}
