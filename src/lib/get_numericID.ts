// get_numericID function: call CouchDB-update function get_numeric_id (DB: myorg).

import { MyOrg }                              from './type/db_doc_myorg';
import { UpdateRes_getNumericID as Response } from './type/db_update_getNumericID_res';
import { orgID_to_couchdbID }                 from './orgID_to_couchdbID';
import { IDError }                            from './IDError';
import * as NANO                              from 'nano';
import * as CONFIG                            from '../config.json';
const DESIGN_NAME                             = CONFIG.couchdb.designName;
const UPDATE_NAME                             = 'get_numeric_id';

async function get_numericID(db:NANO.DocumentScope<MyOrg>, orgid:string)
  :Promise<Response>
{
  let couchdbID:NANO.DocumentViewResponse<string, MyOrg>;

  try
  {
    couchdbID = await orgID_to_couchdbID(db, orgid);
  }
  catch (e)
  {
    let error    = { message: 'orgID_to_couchdbID failure', code: '4' };
    let response = { statusCode: '500' };
    // @ts-ignore
    throw new IDError(error, response, e);
  }

  return db.atomic<Response>(DESIGN_NAME, UPDATE_NAME, couchdbID.rows[0].value);
}

export { get_numericID };
