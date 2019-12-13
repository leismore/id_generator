/**
 * SIDError is the Error class for Short ID API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              HTTP 405: Method Not Allowed
 */

import { LMError } from '@leismore/lmerror';

class SIDError extends LMError {}

export { SIDError };
