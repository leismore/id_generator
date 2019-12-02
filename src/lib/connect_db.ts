/**
 * connect_db function: Connect to the CouchDB
 */

import * as NANO       from 'nano';
import { IDError }     from './IDError';
import * as CREDENTIAL from '../credential/couchdb.json';

/**
 * @throw {IDError}
 */
function connect_db():NANO.ServerScope
{
  try {
    return NANO(
      'https://' + CREDENTIAL.user     + ':' +
                   CREDENTIAL.password + '@' +
                   CREDENTIAL.host     + ':' +
                   CREDENTIAL.port
    );
  } catch (e) {
    let error = { message: 'CouchDB: connection failure', code: '2' };
    let response = { statusCode:'500' };
    throw new IDError(error, response, e);
  }
}

export { connect_db };
