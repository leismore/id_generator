/**
 * IDError is the Error class for this project.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              invalid credential
 * 4              orgID_to_couchdbID failure
 * 5              orgID_to_couchdbID failure (org)
 * 6              orgID_to_couchdbID failure (user)
 */

import { LMError } from '@leismore/lmerror';
class    IDError extends LMError {}
export { IDError };
