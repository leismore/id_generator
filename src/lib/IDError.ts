/**
 * IDError is the Error class for this project.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              invalid credential
 */

import { LMError } from '@leismore/lmerror';
class    IDError extends LMError {}
export { IDError };
