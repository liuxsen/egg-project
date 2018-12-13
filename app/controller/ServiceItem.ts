// 服务项目
import { Context } from 'egg';
import BaseController from './BaseController';

export default class ServiceItemController extends BaseController {
  constructor(ctx: Context) {
    super(ctx);
  }
  // 获取服务项目
  public async index() {
    this.ctx.body = await this.ctx.service.serviceItem.index(
      this.ctx.queries,
      this.getName(),
      ['Worktype'],
    );
  }
  // /service-item/:id
  public async show() {
    this.ctx.body = await this.ctx.service.serviceItem.findOne(
      this.ctx.queries,
      this.getName(),
      ['Worktype'],
    );
  }
}
