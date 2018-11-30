import { Service } from 'egg';
import { firstUpperCase } from '../utils';
export default class BaseService extends Service {
  // 查询列表 可以有分页
  public async index(params: any = {}, serviceName: string) {
    const { limit, pn, ...restParams } = params;
    const offset = +limit * +pn;
    const modelName = this.getModelName(serviceName);
    if (limit && pn) {
      return await this.ctx.model[modelName].findAndCount({
        where: {
          ...restParams,
        },
        limit: +params.limit,
        offset,
      });
    } else {
      return await this.ctx.model.User.findAll({
        where: params,
      });
    }
  }
  // 根据id查找
  public async findById(id: number | string, serviceName: string) {
    const modelName = this.getModelName(serviceName);
    return await this.ctx.model[modelName].findById(id);
  }
  // 新增
  public async create(params: any, serviceName: string) {
    const modelName = this.getModelName(serviceName);
    return await this.ctx.model[modelName].create(params);
  }
  // 更新
  public async update(id: string | number, params: any, serviceName: string) {
    const modelName = this.getModelName(serviceName);
    const affectRows: number[] = await this.ctx.model[modelName].update(
      params,
      {
        where: {
          id,
        },
      },
    );
    if (affectRows.length) {
      return true;
    } else {
      return false;
    }
  }
  // 删除
  public async destroy(id: string | number, serviceName: string) {
    const modelName = this.getModelName(serviceName);
    const result: number = await this.ctx.model[modelName].destroy({
      where: {
        id,
      },
    });
    return result ? true : false;
  }
  private getModelName(str: string) {
    return firstUpperCase(str);
  }
}
