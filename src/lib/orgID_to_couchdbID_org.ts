// orgID_to_couchdbID_org function: From orgID_to_couchdbID view (DB: org).

import { Org }     from './type/db_doc_org';
import * as NANO   from 'nano';
import * as CONFIG from '../config.json';
const DESIGN_NAME  = CONFIG.couchdb.designName;
const VIEW_NAME    = 'orgID_to_couchdbID';

async function orgID_to_couchdbID_org(db:NANO.DocumentScope<Org>, orgid:string)
  :Promise<NANO.DocumentViewResponse<string,Org>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: orgid});
}

export { orgID_to_couchdbID_org };
