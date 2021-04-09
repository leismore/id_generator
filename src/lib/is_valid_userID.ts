/**
 * is_valid_userID function: Check if it is a valid userID in the 'user_authentication' database
 * (view: is_valid_userID)
 */

import { UserAuthentication as UserAuth } from './type/db_doc_userAuthentication';
import * as NANO                          from 'nano';
import * as CONFIG                        from '../config.json';
const DESIGN_NAME                         = CONFIG.couchdb.designName;
const VIEW_NAME                           = 'is_valid_userID';

async function is_valid_userID(db:NANO.DocumentScope<UserAuth>, userID:string)
  :Promise<NANO.DocumentViewResponse<true,UserAuth>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: userID});
}

export { is_valid_userID };
