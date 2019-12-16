/**
 * GET Handler 2 - UUID (Random) Generator
 */

import * as express      from 'express';
import * as uuid4        from 'uuid/v4';
import { RUUIDResponse } from '../lib/RUUIDResponse';

function get_handler2(_req:express.Request, res:express.Response, _next:express.NextFunction):void
{
  let resp = new RUUIDResponse(res);
  let uuid = uuid4();
  resp.res200(uuid);
}

export { get_handler2 };
