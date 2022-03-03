// get_numericID_org function: call CouchDB-update function get_numeric_id (DB: org).

import { unknown2error }                                from '@leismore/unknown2error';
import { Org }                                          from './type/db_doc_org';
import { UpdateRes_getNumericID_org as Response }       from './type/db_update_getNumericID_res_org';
import { orgID_to_couchdbID_org as orgID_to_couchdbID } from './orgID_to_couchdbID_org';
import { IDError }                                      from './IDError';
import * as NANO                                        from 'nano';
import * as CONFIG                                      from '../config.json';
const DESIGN_NAME                                       = CONFIG.couchdb.designName;
const UPDATE_NAME                                       = 'get_numeric_id';

async function get_numericID_org(db:NANO.DocumentScope<Org>, orgid:string)
  :Promise<Response>
{
  let couchdbID:NANO.DocumentViewResponse<string, Org>;

  try
  {
    couchdbID = await orgID_to_couchdbID(db, orgid);
  }
  catch (e)
  {
    const f = unknown2error(e);
    let error    = { message: 'orgID_to_couchdbID failure (org)', code: '5' };
    let response = { statusCode: '500' };
    throw new IDError(error, response, f);
  }

  return db.atomic<Response>(DESIGN_NAME, UPDATE_NAME, couchdbID.rows[0].value);
}

export { get_numericID_org };
