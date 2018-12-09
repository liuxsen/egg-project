import BaseController from './BaseController';

export default class ShopController extends BaseController {
  async create() {
    const body = this.ctx.request.body;
    console.log(body);
    console.log('session', this.ctx.session);
    body.profile_id = this.ctx.session.id;
    const result = await this.ctx.service.shop.create(body, 'Shop');
    this.ctx.body = result;
  }
}
