import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('login', '/api/profile/register', controller.profile.register);
  router.post('login', '/api/profile/login', controller.profile.login);
  router.resources('profile', '/api/profile', controller.profile);
  router.resources('shop', '/api/shop', controller.shop);
};
