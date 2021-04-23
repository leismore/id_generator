// GET Handler 2: Generate token

import { Request, Response, NextFunction } from 'express';
import { Token }         from '@leismore/token';
import { TokenError }    from '../lib/TokenError';
import { TokenResponse } from '../lib/TokenResponse';
import * as CONFIG       from '../config.json';
const BIT_SIZE      = CONFIG.api.token.bitSize;
const BASE_ENCODING = CONFIG.api.token.baseEncoding;

function get_handler2(req:Request, res:Response, next:NextFunction):void
{
  let resp = new TokenResponse(res);

  Token.create(BIT_SIZE, BASE_ENCODING).then(r => {
    resp.res200(String(r));
    return;
  }).catch(e => {
    let error    = { message: 'token generator failure', code: '6' };
    let response = { statusCode: '500' };
    next( new TokenError(error, response, e) );
    return;
  });
}

export { get_handler2 };
