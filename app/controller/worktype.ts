import BaseController from './BaseController';

export default class WorktypeController extends BaseController {
  // 获取服务项目
  public async index() {
    this.ctx.body = await this.ctx.service.worktype.index(
      this.ctx.queries,
      this.getName(),
      ['ServiceItem'],
    );
  }
  public async show() {
    this.ctx.body = await this.ctx.service.worktype.findOne(
      this.ctx.queries,
      this.getName(),
      ['ServiceItem'],
    );
  }
}
