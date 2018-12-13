import BaseService from './BaseService';
/**
 * Test Service
 */
export default class Profile extends BaseService {
  async findOne(params: any) {
    const result: any = await this.ctx.model.Profile.findOne(params);
    return result;
  }
}
