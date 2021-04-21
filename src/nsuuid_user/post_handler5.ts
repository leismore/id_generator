/**
 * POST Handler 5 - Send the new UUID
 */

import { Request, Response, NextFunction } from 'express';
import { NSUUIDResponseUser }              from '../lib/NSUUIDResponseUser';

function post_handler5(req:Request, res:Response, next:NextFunction):void
{
    const resp = new NSUUIDResponseUser(res);
    const newUUID:string = res.locals.newUUID;
    resp.res200(newUUID);
}

export { post_handler5 };
