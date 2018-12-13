import { Application, IBoot } from 'egg';

export default class FooBoot implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }

  configDidLoad() {
    // Config, plugin files have loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    console.log(this.app.env);
    // All plugins have started, can do some thing before app ready.
    // // 店长 - 店铺 1:n
    // this.app.model.Profile.hasMany(this.app.model.Shop);
    // this.app.model.Shop.belongsTo(this.app.model.Profile);
    // // 店铺 - 工种 1：n
    // this.app.model.Worktype.belongsTo(this.app.model.Profile);
    // this.app.model.Profile.hasMany(this.app.model.Worktype);
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}
