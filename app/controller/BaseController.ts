import { Controller } from 'egg';

export default class BaseController extends Controller {
  // GET  /users
  async index() {
    // this.ctx.model.User
    const serviceName = this.getName();
    this.ctx.body = await this.ctx.service[serviceName].index(
      this.ctx.queries,
      serviceName,
    );
  }
  // GET user/:id
  async show() {
    const serviceName = this.getName();
    this.ctx.body = await this.ctx.service[serviceName].findById(
      this.ctx.params.id,
      serviceName,
    );
  }
  // POST /posts
  async create() {
    const body = this.ctx.request.body;
    const serviceName = this.getName();
    const result = await this.ctx.service[serviceName].create(
      body,
      serviceName,
    );
    console.log(result);
    this.ctx.body = result;
  }
  // PUT /posts/:id
  async update() {
    const body = this.ctx.request.body;
    const id = this.ctx.params.id;
    const serviceName = this.getName();
    this.ctx.body = await this.ctx.service[serviceName].update(
      id,
      body,
      serviceName,
    );
  }
  // DELETE /posts/:id
  async destroy() {
    const id = this.ctx.params.id;
    const serviceName = this.getName();
    this.ctx.body = await this.ctx.service[serviceName].destroy(
      id,
      serviceName,
    );
  }
  getName() {
    const path = this.ctx.request.path.split('/')[2];
    return path;
  }
}
