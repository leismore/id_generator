/**
 * GET Handler 2 - Send new numeric ID
 */

import { unknown2error }                   from '@leismore/unknown2error';
import { Request, Response, NextFunction } from 'express';
import * as nano         from 'nano';
import { NIDError }      from '../lib/NIDError';
import { NIDResponse }   from '../lib/NIDResponse';
import { connect_db }    from '../lib/connect_db';
import { get_numericID } from '../lib/get_numericID';
import { MyOrg }         from '../lib/type/db_doc_myorg';
import * as CONFIG       from '../config.json';
const DB_NAME            = CONFIG.couchdb.dbPrefix + '_myorg';

function get_handler2(req:Request, res:Response, next:NextFunction):void
{
  let resp = new NIDResponse(res);
  let db:nano.DocumentScope<MyOrg>;

  // Connect DB
  try
  {
    db = connect_db().use(DB_NAME);
  }
  catch(e)
  {
    const f = unknown2error(e);
    let error = {message: 'CouchDB: connection failure', code: '2'};
    let response = {statusCode: '500'};
    next( new NIDError(error, response, f) );
    return;
  }

  // Get ID
  get_numericID(db, req.app.locals.myorg.orgID).then(r => {
    resp.res200(r.status);
    return;
  }).catch(e => {
    let error = {message: 'get_numericID failure', code: '6'};
    let response = {statusCode: '500'};
    next( new NIDError(error, response, e) );
    return;
  });
}

export { get_handler2 };
