/**
 * POST Handler 3 - Checking the existence of the input orgID
 */

import { unknown2error }                   from '@leismore/unknown2error';
import { Request, Response, NextFunction } from 'express';
import { NIDErrorOrg }                     from '../lib/NIDErrorOrg';
import { connect_db }                      from '../lib/connect_db';
import { NIDInputsOrg as Inputs }          from '../lib/type/NIDInputsOrg';
import { Org }                             from '../lib/type/db_doc_org';
import { DocumentScope as DB }             from 'nano';
import { is_valid_orgID }                  from '../lib/is_valid_orgID';
import * as CONFIG                         from '../config.json';

const DB_NAME = CONFIG.couchdb.dbPrefix + '_org';

function post_handler3(req:Request, res:Response, next:NextFunction):void
{
  const inputs:Inputs = res.locals.inputs;
  let   db:DB<Org>;

  // Connect to DB
  try {
    db = connect_db().use(DB_NAME);
  } catch (e) {
    const f = unknown2error(e);
    let error = {message: 'CouchDB: connection failure', code: '2'};
    let response = {statusCode: '500'};
    next( new NIDErrorOrg(error, response, f) );
    return;
  }

  // Test orgID
  is_valid_orgID(db, inputs.orgID)

  .then( r => {
    if (r.rows.length === 0)
    {
      let error = {message: 'invalid input: orgID', code: '6'};
      let response = {
        statusCode:   '415',
        headers:    { 'Content-Type': 'application/json' },
        body:       { 'error':        'invalid_orgID' }
      };
      next( new NIDErrorOrg(error, response) );
      return;
    }
    else
    {
      res.locals.db = db;
      next();
      return;
    }
  })

  .catch( e => {
    let error = {message: 'is_valid_orgID failure', code: '7'};
    let response = {statusCode: '500'};
    next( new NIDErrorOrg(error, response, e) );
    return;
  });
}

export { post_handler3 };