/**
 * POST Handler 4 - Generate UUID (Namespace)
 */

import { Request, Response, NextFunction } from 'express';
import { v5 as uuid5 }                     from 'uuid';
import { NSUUIDInputsOrg as Inputs }       from '../lib/type/NSUUIDInputsOrg';

function post_handler4(req:Request, res:Response, next:NextFunction):void
{
  const inputs:Inputs = res.locals.inputs;
  const NS:string     = inputs.orgID;
  const NAME:string   = res.locals.nid;
  const uuid:string   = uuid5(NAME, NS);
  res.locals.newUUID  = uuid;
  next();
}

export { post_handler4 };
