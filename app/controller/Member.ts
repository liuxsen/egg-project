import BaseController from './BaseController';

export default class MemberController extends BaseController {
  public async index() {
    this.ctx.body = await this.ctx.service.member.index(
      this.ctx.queries,
      this.getName(),
      [
        'CardType',
        'Shop',
        {
          name: 'Member',
          as: 'introInfo', // 介绍人
        },
      ],
    );
  }
  public async show() {
    this.ctx.body = await this.ctx.service.member.findOne(
      this.ctx.queries,
      this.getName(),
      [
        'CardType',
        'Shop',
        {
          name: 'Member',
          as: 'introInfo', // 介绍人
        },
      ],
    );
  }
}
