/**
 * Init Handler 1 - Set the orgID (myorg) for this application
 */

import * as express    from 'express';
import * as nano       from 'nano';
import { InitError }   from '../lib/InitError';
import { connect_db }  from '../lib/connect_db';
import { get_myOrgID } from '../lib/get_myOrgID';
import { PrivateApp }  from '../lib/type/db_doc_privateApp';
import * as CONFIG     from '../config.json';
const DB_NAME          = CONFIG.couchdb.dbPrefix + '_private_app';

function init_handler1(req:express.Request, res:express.Response, next:express.NextFunction):void
{
  let db:nano.DocumentScope<PrivateApp>;

  // Connect DB
  try
  {
    db = connect_db().use(DB_NAME);
  }
  catch(e)
  {
    let error = {message: 'CouchDB: connection failure', code: '1'};
    let response = {statusCode: '500'};
    next( new InitError(error, response, e) );
    return;
  }

  // Get ID
  get_myOrgID(db).then(r => {
    req.app.locals.myorg = {
      orgID: r.rows[0].value
    };
    next();
    return;
  }).catch(e => {
    let error = {message: 'get_myOrgID failure', code: '2'};
    let response = {statusCode: '500'};
    next( new InitError(error, response, e) );
    return;
  });
}

export { init_handler1 };
