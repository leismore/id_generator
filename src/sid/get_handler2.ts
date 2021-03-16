/**
 * GET Handler 2 - Generate Short ID
 */

import { Request, Response, NextFunction } from 'express';
import * as NANOID_DIC                     from 'nanoid-dictionary';
import { customAlphabet }                  from 'nanoid/async';
import { SIDResponse }                     from '../lib/SIDResponse';
import { SIDError }                        from '../lib/SIDError';
import * as CONFIG                         from '../config.json';
// @ts-ignore
const CHARS               = NANOID_DIC[CONFIG.api.short.characters];
const LENGTH              = CONFIG.api.short.length;

function get_handler2(_req:Request, res:Response, next:NextFunction):void
{
  const resp = new SIDResponse(res);
  const nanoid = customAlphabet(CHARS, LENGTH);
  
  nanoid().then( id => {
    resp.res200(id);
  })
  .catch( e => {
    let error    = { message:'Nano ID failure', code:'6' };
    let response = { statusCode:'500' };
    next( new SIDError(error, response, e) );
  });
}

export { get_handler2 };
