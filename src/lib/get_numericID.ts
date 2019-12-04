// get_numericID function: call CouchDB-update function get_numeric_id (DB: myorg).

import { MyOrg }                             from './type/db_doc_myorg';
import { UpdateRes_getNumericID as Response} from './type/db_update_getNumericID_res';
import * as NANO                             from 'nano';
import * as CONFIG                           from '../config.json';
const DESIGN_NAME                            = CONFIG.couchdb.designName;
const UPDATE_NAME                            = 'get_numeric_id';
const ORGID                                  = CONFIG.myorg.orgID;

async function get_numericID(db:NANO.DocumentScope<MyOrg>)
  :Promise<Response>
{
  return db.atomic<Response>(DESIGN_NAME, UPDATE_NAME, ORGID);
}

export { get_numericID };
