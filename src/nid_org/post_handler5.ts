/**
 * POST Handler 5 - Send back the new ID
 */

import { Request, Response, NextFunction } from 'express';
import { NIDResponseOrg }                  from '../lib/NIDResponseOrg';

function post_handler5(req:Request, res:Response, next:NextFunction):void
{
    const newID:string = res.locals.newID;
    const resp         = new NIDResponseOrg(res);
    resp.res200(newID);
}

export { post_handler5 };
