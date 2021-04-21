/**
 * POST Handler 2 - Input Validation
 */

import { validate as uuidValidate }        from 'uuid';
import { Request, Response, NextFunction } from 'express';
import { NSUUIDErrorOrg }                  from '../lib/NSUUIDErrorOrg';
import { NSUUIDInputsOrg as Inputs }       from '../lib/type/NSUUIDInputsOrg';

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
    next( new NSUUIDErrorOrg(error, response) );
    return;
  }

  // Test input data
  if ( ('orgID' in inputs === false)      ||
       (typeof inputs.orgID !== 'string') ||
       (uuidValidate(inputs.orgID) === false) )
  {
    let error = {message: 'invalid input: orgID', code: '6'};
    let response = {
      statusCode:   '415',
      headers:    { 'Content-Type': 'application/json' },
      body:       { 'error':        'invalid_orgID' }
    };
    next( new NSUUIDErrorOrg(error, response) );
    return;
  }

  // Save and next
  res.locals.inputs = inputs;
  next();
}

export { post_handler2 };
