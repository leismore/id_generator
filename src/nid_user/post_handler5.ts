/**
 * POST Handler 5 - Send back the new ID
 */

import { Request, Response, NextFunction } from 'express';
import { NIDResponseUser }                 from '../lib/NIDResponseUser';

function post_handler5(req:Request, res:Response, next:NextFunction):void
{
    const newID:string = res.locals.newID;
    const resp         = new NIDResponseUser(res);
    resp.res200(newID);
}

export { post_handler5 };
