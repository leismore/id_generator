// orgID_to_couchdbID function: From orgID_to_couchdbID view (DB: myorg).

import { MyOrg }     from './type/db_doc_myorg';
import * as NANO     from 'nano';
import * as CONFIG   from '../config.json';
const DESIGN_NAME    = CONFIG.couchdb.designName;
const VIEW_NAME      = 'orgID_to_couchdbID';

async function orgID_to_couchdbID(db:NANO.DocumentScope<MyOrg>, orgid:string)
  :Promise<NANO.DocumentViewResponse<string,MyOrg>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: orgid});
}

export { orgID_to_couchdbID };
