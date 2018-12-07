import { Context } from 'egg';

// 这里是你自定义的中间件
export default function resMiddleWare(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 拦截返回的请求 所以先放行
    await next();
    console.log(ctx.body);
    ctx.body = {
      msg: ctx.response.message,
      status: ctx.response.status,
      data: {
        result: {
          ...ctx.body,
          code: ctx.body.code || ctx.response.status,
        },
      },
    };
  };
}
