/**
 * GET Handler 2 - UUID (Random) Generator
 */

import { Request, Response, NextFunction } from 'express';
import { v4 as uuid4 }   from 'uuid';
import { RUUIDResponse } from '../lib/RUUIDResponse';

function get_handler2(req:Request, res:Response, next:NextFunction):void
{
  let resp = new RUUIDResponse(res);
  let uuid = uuid4();
  resp.res200(uuid);
}

export { get_handler2 };
