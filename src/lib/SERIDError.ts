/**
 * SERIDError is the Error class for Shorter ID API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              HTTP 405: Method Not Allowed
 * 4              authorization failure
 * 5              auth_app_self failure
 * 6              Nano ID failure
 */

import { LMError } from '@leismore/lmerror';

class SERIDError extends LMError {}

export { SERIDError };
