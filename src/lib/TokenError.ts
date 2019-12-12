/**
 * TokenError is the Error class for Token API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              HTTP 405: Method Not Allowed
 * 4              auth_app_self failure
 * 5              authorization failure
 * 6              token generator failure
 */

import { LMError } from '@leismore/lmerror';

class TokenError extends LMError {}

export { TokenError };
