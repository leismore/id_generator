/**
 * POST Handler 2 - Input Validation
 */

import { validate as uuidValidate }        from 'uuid';
import { Request, Response, NextFunction } from 'express';
import { NSUUIDErrorUser }                 from '../lib/NSUUIDErrorUser';
import { NSUUIDInputsUser as Inputs }      from '../lib/type/NSUUIDInputsUser';

function post_handler2(req:Request, res:Response, next:NextFunction):void
{
  const inputs:Inputs = req.body;

  // Test media type
  if ( req.is('application/json') === false )
  {
    let error = {message: 'not application/json', code: '1'};
    let response = {
      statusCode: '415'
    };
    next( new NSUUIDErrorUser(error, response) );
    return;
  }

  // Test input data
  if ( ('userID' in inputs === false)      ||
       (typeof inputs.userID !== 'string') ||
       (uuidValidate(inputs.userID) === false) )
  {
    let error = {message: 'invalid input: userID', code: '6'};
    let response = {
      statusCode:   '415',
      headers:    { 'Content-Type': 'application/json' },
      body:       { 'error':        'invalid_userID' }
    };
    next( new NSUUIDErrorUser(error, response) );
    return;
  }

  // Save and next
  res.locals.inputs = inputs;
  next();
}

export { post_handler2 };
