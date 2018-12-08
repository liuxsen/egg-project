// auth 校验登录权限
import { Context } from 'egg';
import { verify } from 'jsonwebtoken';

export default function auth(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    const token = ctx.request.header.token;
    const ifValide: any = verify(token, '123456');
    if (ifValide.id) {
      ctx.session = ifValide;
      console.log('进来了');
      return await next();
    } else {
      ctx.body = {
        code: 403,
        msg: '权限不足',
      };
    }
  };
}
