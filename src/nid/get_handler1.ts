/**
 * GET Handler 1 - Auth
 */

import * as express       from 'express';
import { NIDError }       from '../lib/NIDError';
import { author }         from '../lib/author';
import { AuthorInputs }   from '../lib/type/AuthorInputs';
import { AuthenInputs }   from '../lib/type/AuthenInputs';
import { parse_httpAuth } from '../lib/parse_httpAuth';
import * as CONFIG        from '../config.json';
const HOST_ID    = CONFIG.app.appID;
const PERMISSION = 'get_id_numeric';
const ERROR      = {
  err: {message: 'authorization failure', code: '4'},
  res: {statusCode: '403'}
};

function get_handler1(req:express.Request, _res:express.Response, next:express.NextFunction):void
{
  let authenInputs:AuthenInputs;
  let authorInputs:AuthorInputs;

  // Parse HTTP Authorization header
  try
  {
    let httpAuthor = req.get('Authorization');
    if (httpAuthor === undefined)
    {
      next( new NIDError(ERROR.err, ERROR.res) );
      return;
    }
    else
    {
      authenInputs = parse_httpAuth(httpAuthor);
    }
  }
  catch (e)
  {
    next( new NIDError(ERROR.err, ERROR.res, e) );
    return;
  }

  // Query auth_app_self
  authorInputs = {
    authen: authenInputs,
    hostID: HOST_ID,
    permission: PERMISSION
  };

  author(authorInputs).then(r => {
    if (r.data.result === true)
    {
      next();
      return;
    }
    else
    {
      next( new NIDError(ERROR.err, ERROR.res) );
      return;
    }
  }).catch(e => {
    let error = {message: 'auth_app_self failure', code: '5'};
    let response = {statusCode: '500'};
    next( new NIDError(error, response, e) );
    return;
  });
}

export { get_handler1 };
