import { sign } from 'jsonwebtoken';
import { sendEmail } from '../utils/index';
import BaseController from './BaseController';

export default class ProfileController extends BaseController {
  // 登录
  async login() {
    const ctx = this.ctx;
    const { email, password, code } = ctx.request.body;
    // 检查 验证码的合法性
    const secret = await this.vefiryEmailCode(email);
    // 如果保存的验证码跟邮箱匹配；通过，否则验证码非法
    if (secret !== code) {
      ctx.body = {
        code: 403,
        msg: '验证码不正确',
      };
      return;
    }
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
  public async email() {
    const { ctx } = this;
    try {
      const { email } = ctx.request.body;
      const secret = await sendEmail(email);
      const secretKey = `secret:${email}`;
      // 过期时间以秒为单位 验证码 5分钟内有效
      await this.app.redis.set(secretKey, secret, 'EX', 300);
      ctx.body = {
        verify_code: secret,
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        code: 505,
        msg: '邮箱发送失败',
      };
    }
  }
  // 验证邮箱验证码合法性
  private async vefiryEmailCode(email: string) {
    const secret = await this.app.redis.get(`secret:${email}`);
    return secret;
  }
  private createToken(id: string | number) {
    return sign({ id }, '123456');
  }
}
