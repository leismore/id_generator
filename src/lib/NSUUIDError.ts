/**
 * NSUUIDError is the Error class for UUID (Namespace) API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 */

import { LMError } from '@leismore/lmerror';

class NSUUIDError extends LMError {}

export { NSUUIDError };
