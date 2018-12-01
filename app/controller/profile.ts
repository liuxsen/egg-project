import { sign } from 'jsonwebtoken';
import BaseController from './BaseController';
export default class ProfileController extends BaseController {
  // 登录
  async login() {
    const ctx = this.ctx;
    const { email, password } = ctx.request.body;
    const serviceName = this.getName();
    const profile = await this.service.profile.findOne(
      {
        email,
        password,
      },
      serviceName,
    );
    const token = sign({ id: 1 }, '123456');
    console.log(token);
    if (profile === null) {
      ctx.body = {
        code: 403,
        msg: '用户名或者密码不匹配',
      };
    } else {
      ctx.body = {
        token,
        user: profile,
      };
    }
  }
  // 注册
  async register() {
    const ctx = this.ctx;
    const { email, password } = ctx.request.body;
    const serviceName = this.getName();
    const profile = await this.service.profile.findOne(
      {
        email,
        password,
      },
      serviceName,
    );
    if (profile !== null) {
      ctx.body = {
        code: 405,
        msg: '用户已经存在',
      };
    } else {
      // 创建用户
      const newProfile = await this.service.profile.create(
        {
          email,
          password,
        },
        serviceName,
      );
      // 生成token
      const token = this.createToken(profile);
      ctx.body = {
        token,
        user: newProfile,
      };
    }
  }
  private createToken(id: string | number) {
    return sign({ id }, '123456');
  }
}
