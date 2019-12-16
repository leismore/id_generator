/**
 * NSUUIDError is the Error class for UUID (Namespace) API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              HTTP 405: Method Not Allowed
 * 4              authorization failure
 * 5              auth_app_self failure
 * 6              get Numeric-ID failure
 */

import { LMError } from '@leismore/lmerror';

class NSUUIDError extends LMError {}

export { NSUUIDError };
