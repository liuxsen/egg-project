import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // 上传图片
  router.post('upload', '/api/base/upload', controller.base.upload);
  // 注册
  router.post('register', '/api/profile/register', controller.profile.register);
  // 登录
  router.post('login', '/api/profile/login', controller.profile.login);
  // 发送邮件
  router.post('email', '/api/profile/email', controller.profile.email);
  // 个人信息
  router.resources('profile', '/api/profile', controller.profile);
  // 店铺
  router.resources('shop', '/api/shop', controller.shop);
  // 员工
  router.resources('staff', '/api/staff', controller.staff);
  // 工种
  router.resources('worktype', '/api/worktype', controller.worktype);
  // 服务项目
  router.resources('servicetype', '/api/service-item', controller.serviceItem);
  // 技师提成
  router.resources(
    'teachpercent',
    '/api/teach-percent',
    controller.teachPercent,
  );
  // 会员卡提成
  router.resources('cardPercent', '/api/card-percent', controller.cardPercent);
  // 会员
  router.resources('member', '/api/member', controller.member);
  // 充值记录
  router.resources(
    'chargeRecord',
    '/api/charge-record',
    controller.chargeRecord,
  );
};
