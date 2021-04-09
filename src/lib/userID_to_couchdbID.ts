// userID_to_couchdbID function: From userID_to_couchdbID view (DB: user).

import { User }     from './type/db_doc_user';
import * as NANO    from 'nano';
import * as CONFIG  from '../config.json';
const DESIGN_NAME   = CONFIG.couchdb.designName;
const VIEW_NAME     = 'userID_to_couchdbID';

async function userID_to_couchdbID(db:NANO.DocumentScope<User>, userid:string)
  :Promise<NANO.DocumentViewResponse<string,User>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: userid});
}

export { userID_to_couchdbID };
