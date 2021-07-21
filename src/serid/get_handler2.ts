/**
 * GET Handler 2 - Generate Shorter ID
 */

import { Request, Response, NextFunction } from 'express';
import { customAlphabet }                  from 'nanoid/async';
import { SERIDResponse }                   from '../lib/SERIDResponse';
import { SERIDError }                      from '../lib/SERIDError';
import * as CONFIG                         from '../config.json';
const CHARS               = CONFIG.api.shorter.characters;
const LENGTH              = CONFIG.api.shorter.length;

function get_handler2(_req:Request, res:Response, next:NextFunction):void
{
  const resp = new SERIDResponse(res);
  const nanoid = customAlphabet(CHARS, LENGTH);
  
  nanoid().then( id => {
    resp.res200(id);
  })
  .catch( e => {
    let error    = { message:'Nano ID failure', code:'6' };
    let response = { statusCode:'500' };
    next( new SERIDError(error, response, e) );
  });
}

export { get_handler2 };
