/**
 * GET Handler 2 - Send new numeric ID
 */

import * as express      from 'express';
import * as nano         from 'nano';
import { NIDError }      from '../lib/NIDError';
import { NIDResponse }   from '../lib/NIDResponse';
import { connect_db }    from '../lib/connect_db';
import { get_numericID } from '../lib/get_numericID';
import { MyOrg }         from '../lib/type/db_doc_myorg';
import * as CONFIG       from '../config.json';
const DB_NAME            = CONFIG.couchdb.dbPrefix + '_myorg';

function get_handler2(_req:express.Request, res:express.Response, next:express.NextFunction):void
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
    let error = {message: 'CouchDB: connection failure', code: '2'};
    let response = {statusCode: '500'};
    next( new NIDError(error, response, e) );
    return;
  }

  // Get ID
  get_numericID(db).then(r => {
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
