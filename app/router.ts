import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('upload', '/api/base/upload', controller.base.upload);
  router.post('register', '/api/profile/register', controller.profile.register);
  router.post('login', '/api/profile/login', controller.profile.login);
  router.post('email', '/api/profile/email', controller.profile.email);
  router.resources('profile', '/api/profile', controller.profile);
  router.resources('shop', '/api/shop', controller.shop);
  router.resources('staff', '/api/staff', controller.staff);
  router.resources('worktype', '/api/worktype', controller.worktype);
  router.resources('serviceType', '/api/serviceType', controller.serviceType);
};
