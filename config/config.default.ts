import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543470672414_671';

  // add your egg config in here
  config.middleware = ['log', 'auth', 'res'];

  // 插件配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    password: '123456',
    port: 3306,
    database: 'egg',
  };

  // 安全配置
  config.security = {
    csrf: {
      enable: false,
      headerName: 'csrfToken', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },
  };

  config.multipart = {
    fileSize: '50mb',
    mode: 'file',
  };

  config.auth = {
    ignore(ctx) {
      const allowPath = [
        '/api/profile/login',
        '/api/profile/register',
        '/api/profile/email',
        '/api/base/upload',
      ];
      const oStaticReg = /^\/public\/static\/.*/g;
      const oImgReg = /(\.[jpeg|jpg|png])$/;
      const path = ctx.request.path;
      return (
        allowPath.includes(path) || oStaticReg.test(path) || oImgReg.test(path)
      );
    },
  };

  config.res = {
    ignore(ctx) {
      const oStaticReg = /^\/public\/static\/.*/g;
      const path = ctx.request.path;
      return oStaticReg.test(path);
    },
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    },
  };
  // token
  config.token = {
    secret: 'liuxsen',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
