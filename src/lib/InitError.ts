/**
 * InitError is the Error class for the application initializer.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              CouchDB: connection failure
 * 2              get_myOrgID failure
 */

import { LMError } from '@leismore/lmerror';
class InitError extends LMError {}
export { InitError };
