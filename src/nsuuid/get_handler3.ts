/**
 * GET Handler 3 - Generate UUID (Namespace)
 */

import { Request, Response, NextFunction } from 'express';
import { v5 as uuid5 }    from 'uuid';
import { NSUUIDResponse } from '../lib/NSUUIDResponse';

function get_handler3(req:Request, res:Response, next:NextFunction):void
{
  const NS:string   = req.app.locals.myorg.orgID;
  const NAME:string = res.locals.nid;
  const resp        = new NSUUIDResponse(res);

  let uuid = uuid5(NAME, NS);
  resp.res200(uuid);
}

export { get_handler3 };
