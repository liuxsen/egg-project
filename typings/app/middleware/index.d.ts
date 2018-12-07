// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Auth from '../../../app/middleware/auth';
import Log from '../../../app/middleware/log';
import Res from '../../../app/middleware/res';
import Session from '../../../app/middleware/session';

declare module 'egg' {
  interface IMiddleware {
    auth: typeof Auth;
    log: typeof Log;
    res: typeof Res;
    session: typeof Session;
  }
}
