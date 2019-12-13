/**
 * All Handler 1 - Prevent not-allowed HTTP methods
 */

import * as express    from 'express';
import { RUUIDError }  from '../lib/RUUIDError';
const ALLOWED        = ['OPTIONS', 'GET'];

function all_handler1(req:express.Request, _res:express.Response, next:express.NextFunction):void
{
  if (ALLOWED.includes( req.method.toUpperCase() ) === false)
  {
    let error = {message: 'HTTP 405: Method Not Allowed', code: '3'};
    let response = {
      statusCode: '405',
      headers: { 'Allow': ALLOWED.join(', ') }
    };
    next( new RUUIDError(error, response) );
    return;
  }
  else
  {
    next('route');
    return;
  }
}

export { all_handler1 };
