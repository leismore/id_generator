/**
 * GET Handler 2 - UUID (Random) Generator
 */

import * as express      from 'express';
import { v4 as uuidV4 }  from 'uuid';
import { RUUIDResponse } from '../lib/RUUIDResponse';

function get_handler2(_req:express.Request, res:express.Response, _next:express.NextFunction):void
{
  let resp = new RUUIDResponse(res);
  let uuid = uuidV4();
  resp.res200(uuid);
}

export { get_handler2 };
