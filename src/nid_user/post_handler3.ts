/**
 * POST Handler 3 - Checking the existence of the input userID
 */

import { unknown2error }                   from '@leismore/unknown2error';
import { Request, Response, NextFunction } from 'express';
import { NIDErrorUser }                    from '../lib/NIDErrorUser';
import { connect_db }                      from '../lib/connect_db';
import { NIDInputsUser as Inputs }         from '../lib/type/NIDInputsUser';
import { UserAuthentication as UserAuth }  from '../lib/type/db_doc_userAuthentication';
import { DocumentScope as DB }             from 'nano';
import { is_valid_userID }                 from '../lib/is_valid_userID';
import * as CONFIG                         from '../config.json';

const DB_NAME = CONFIG.couchdb.dbPrefix + '_user_authentication';

function post_handler3(req:Request, res:Response, next:NextFunction):void
{
  const inputs:Inputs = res.locals.inputs;
  let   db:DB<UserAuth>;

  // Connect to DB
  try {
    db = connect_db().use(DB_NAME);
  } catch (e) {
    const f = unknown2error(e);
    let error = {message: 'CouchDB: connection failure', code: '2'};
    let response = {statusCode: '500'};
    next( new NIDErrorUser(error, response, f) );
    return;
  }

  // Test orgID
  is_valid_userID(db, inputs.userID)

  .then( r => {
    if (r.rows.length === 0)
    {
      let error = {message: 'invalid input: userID', code: '6'};
      let response = {
        statusCode:   '415',
        headers:    { 'Content-Type': 'application/json' },
        body:       { 'error':        'invalid_userID' }
      };
      next( new NIDErrorUser(error, response) );
      return;
    }
    else
    {
      next();
      return;
    }
  })

  .catch( e => {
    let error = {message: 'is_valid_userID failure', code: '7'};
    let response = {statusCode: '500'};
    next( new NIDErrorUser(error, response, e) );
    return;
  });
}

export { post_handler3 };