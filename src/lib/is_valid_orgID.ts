/**
 * is_valid_orgID function: Check if it is a valid orgID in 'org' database (view: is_valid_orgID)
 */

import { Org }        from './type/db_doc_org';
import * as NANO      from 'nano';
import * as CONFIG    from '../config.json';
const DESIGN_NAME     = CONFIG.couchdb.designName;
const VIEW_NAME       = 'is_valid_orgID';

async function is_valid_orgID(db:NANO.DocumentScope<Org>, orgID:string)
  :Promise<NANO.DocumentViewResponse<true,Org>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: orgID});
}

export { is_valid_orgID };
