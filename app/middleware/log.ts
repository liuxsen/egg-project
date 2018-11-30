import { Context } from 'egg';

// 这里是你自定义的中间件
export default function resMiddleWare(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.coreLogger.info();
    await next();
  };
}
