import { sign } from 'jsonwebtoken';
import { sendEmail } from '../utils/index';
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
    if (profile === null) {
      ctx.body = {
        code: 403,
        msg: '用户名或者密码不匹配',
      };
      return;
    } else {
      const token = sign({ id: profile.id }, '123456');
      ctx.body = {
        token,
        user: profile,
      };
    }
  }
  // 注册
  async register() {
    const ctx = this.ctx;
    const { email, password, code } = ctx.request.body;
    // 校验邮箱验证码的合法性
    const secret = await this.vefiryEmailCode(email);
    // 如果前端发送过来的 验证码，跟redis中保存的 验证码不一致
    if (secret !== code) {
      ctx.body = {
        code: 405,
        msg: '验证码非法',
      };
      return;
    }
    const serviceName = this.getName();
    const profile = await this.service.profile.findOne(
      {
        email,
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
  // 获取验证码
  public async email() {
    const { ctx } = this;
    try {
      const { email } = ctx.request.body;
      const secret = await sendEmail(email);
      const secretKey = `secret:${email}`;
      // 过期时间以秒为单位 验证码 5分钟内有效
      await this.app.redis.set(secretKey, secret, 'EX', 300);
      ctx.body = {
        message: '发送成功',
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
