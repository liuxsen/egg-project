// auth 校验登录权限
import { Context } from 'egg';
import { verify } from 'jsonwebtoken';

export default function auth(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    try {
      const token = ctx.request.header.token;
      console.log(token);
      const ifValide = verify(token, '123456');
      console.log(ifValide, token);
      if (ifValide) {
        ctx.session = ifValide;
        console.log('session', ctx.session);
        await next();
      } else {
        ctx.body = {
          code: 403,
          msg: '权限不足',
        };
      }
    } catch (error) {
      ctx.body = {
        code: 403,
        msg: '权限不足',
      };
    }
  };
}
