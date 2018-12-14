import { Service } from 'egg';
import { firstUpperCase } from '../utils';
export default class BaseService extends Service {
  // 查询列表 可以有分页
  public async index(params: any = {}, serviceName: string, includes: any) {
    const { limit, pn, ...restParams } = params;
    const offset = +limit * (+pn - 1);
    const modelName = this.getModelName(serviceName);
    console.log('modelName', modelName);
    const profileId = this.ctx.session.id;
    const options: any = {
      where: {
        ...restParams,
        profile_id: profileId,
      },
    };
    // 如果需要include 模型
    if (includes && includes.length) {
      // 需要关联的model模型数组
      const aModel = includes.map((item) => {
        if (item.name) {
          return {
            ...item,
            model: this.app.model[item.name],
          };
        } else {
          return {
            model: this.app.model[item],
          };
        }
      });
      options.include = aModel;
    }
    // 如果需要分页
    console.log(options);
    console.log(modelName);
    if (limit && pn) {
      options.limit = +params.limit;
      options.offset = offset;
      return await this.ctx.model[modelName].findAndCountAll(options);
    } else {
      return await this.ctx.model[modelName].findAll(options);
    }
  }
  // 根据id查找
  public async findById(id: number | string, serviceName: string) {
    const modelName = this.getModelName(serviceName);
    const result = await this.ctx.model[modelName].findById(id);
    console.log(result);
    if (result) {
      return result;
    } else {
      return {};
    }
  }
  // 新增
  public async create(params: any, serviceName: string) {
    const modelName = this.getModelName(serviceName);
    params.profile_id = this.ctx.session.id;
    return await this.ctx.model[modelName].create(params).then((res: any) =>
      res.get({
        plain: true,
      }),
    );
  }
  // 更新
  public async update(id: string | number, params: any, serviceName: string) {
    const modelName = this.getModelName(serviceName);
    const profileId = this.ctx.session.id;
    const affectRows: number[] = await this.ctx.model[modelName].update(
      params,
      {
        where: {
          id,
          profile_id: profileId,
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
    const profileId = this.ctx.session.id;
    const result: number = await this.ctx.model[modelName].destroy({
      where: {
        id,
        profile_id: profileId,
      },
    });
    return result ? true : false;
  }
  // 查找一个
  public async findOne(params: any, serviceName: string, includes: any) {
    const modelName = this.getModelName(serviceName);
    const profileId = this.ctx.session.id;
    const options: any = {
      where: {
        ...params,
        profile_id: profileId,
      },
    };
    // 如果需要include 模型
    if (includes && includes.length) {
      // 需要关联的model模型数组
      const aModel = includes.map((item) => {
        if (item.name) {
          return {
            ...item,
            model: this.app.model[item.name],
          };
        } else {
          return {
            model: this.app.model[item],
          };
        }
      });
      options.include = aModel;
    }
    const result: any = await this.ctx.model[modelName].findOne(options);
    return result;
  }
  public getModelName(str: string) {
    return firstUpperCase(str);
  }
}
