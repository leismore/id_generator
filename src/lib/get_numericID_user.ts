// get_numericID_user function: call CouchDB-update function get_numeric_id (DB: user).

import { unknown2error }                           from '@leismore/unknown2error';
import { User }                                    from './type/db_doc_user';
import { UpdateRes_getNumericID_user as Response } from './type/db_update_getNumericID_res_user';
import { userID_to_couchdbID }                     from './userID_to_couchdbID';
import { IDError }                                 from './IDError';
import * as NANO                                   from 'nano';
import * as CONFIG                                 from '../config.json';
const DESIGN_NAME                                  = CONFIG.couchdb.designName;
const UPDATE_NAME                                  = 'get_numeric_id';

async function get_numericID_user(db:NANO.DocumentScope<User>, userid:string)
  :Promise<Response>
{
  let couchdbID:NANO.DocumentViewResponse<string, User>;

  try
  {
    couchdbID = await userID_to_couchdbID(db, userid);
  }
  catch (e)
  {
    const f = unknown2error(e);
    let error    = { message: 'orgID_to_couchdbID failure (user)', code: '6' };
    let response = { statusCode: '500' };
    throw new IDError(error, response, f);
  }

  return db.atomic<Response>(DESIGN_NAME, UPDATE_NAME, couchdbID.rows[0].value);
}

export { get_numericID_user };
