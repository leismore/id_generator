/**
 * connect_db function: Connect to the CouchDB
 */

import * as NANO         from 'nano';
import { IDError }       from './IDError';
import { unknown2error } from '@leismore/unknown2error';
import * as CREDENTIAL   from '../credential/couchdb.json';

/**
 * @throw {IDError}
 */
function connect_db():NANO.ServerScope
{
  const PROTOCOL = CREDENTIAL.ssl ? 'https' : 'http';

  try {
    return NANO(
      PROTOCOL + '://' + CREDENTIAL.user     + ':' +
                         CREDENTIAL.password + '@' +
                         CREDENTIAL.host     + ':' +
                         CREDENTIAL.port
    );
  } catch (e) {
    const f = unknown2error(e);
    let error = { message: 'CouchDB: connection failure', code: '2' };
    let response = { statusCode:'500' };
    throw new IDError(error, response, f);
  }
}

export { connect_db };
