import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('register', '/api/profile/register', controller.profile.register);
  router.post('login', '/api/profile/login', controller.profile.login);
  router.post('email', '/api/profile/email', controller.profile.email);
  router.resources('profile', '/api/profile', controller.profile);
  router.resources('shop', '/api/shop', controller.shop);
};
