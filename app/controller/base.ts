// 应用基础api
import { Controller } from 'egg';
import * as fs from 'fs';
import * as path from 'path';
import { host } from '../config';

export default class Base extends Controller {
  async upload() {
    const filesReq: any = this.ctx.request;
    try {
      // process file or upload to cloud storage
      const ps = filesReq.files.map(async (file: any) => {
        const sNewPath = await this.move(file);
        return sNewPath;
      });
      const files = await Promise.all(ps);
      this.ctx.body = {
        file: files[0],
      };
    } finally {
      // need to remove the tmp files
      await this.ctx.cleanupRequestFiles();
    }
  }
  async move(oldPath: any) {
    return new Promise((resolve, reject) => {
      const aPath = oldPath.filepath.split('/');
      const sNewPath = aPath[aPath.length - 1];
      const sEndPath = path.join(__dirname, '../public/static', sNewPath);
      fs.rename(oldPath.filepath, sEndPath, (err) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(host + '/public/static/' + sNewPath);
        }
      });
    });
  }
}
