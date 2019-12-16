/**
 * GET Handler 3 - Generate UUID (Namespace)
 */

import * as express       from 'express';
import { v5 as uuid5 }    from 'uuid';
import { NSUUIDResponse } from '../lib/NSUUIDResponse';
import * as CONFIG        from '../config.json';
const NS = CONFIG.myorg.orgID;

function get_handler3(_req:express.Request, res:express.Response, _next:express.NextFunction):void
{
  const NAME:string = res.locals.nid;
  const resp = new NSUUIDResponse(res);

  let uuid = uuid5(NAME, NS);
  resp.res200(uuid);
}

export { get_handler3 };
