/**
 * RUUIDError is the Error class for UUID (Random) API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 */

import { LMError } from '@leismore/lmerror';

class RUUIDError extends LMError {}

export { RUUIDError };
