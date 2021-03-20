// get_myOrgID function: From get_orgID view (DB: private_app)

import { PrivateApp } from './type/db_doc_privateApp';
import * as NANO      from 'nano';
import * as CONFIG    from '../config.json';
const DESIGN_NAME     = CONFIG.couchdb.designName;
const VIEW_NAME       = 'get_orgID';
const APPID           = CONFIG.app.appID;

async function get_myOrgID(db:NANO.DocumentScope<PrivateApp>)
  :Promise<NANO.DocumentViewResponse<string,PrivateApp>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: APPID});
}

export { get_myOrgID };
