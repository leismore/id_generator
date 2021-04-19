/**
 * NIDErrorOrg is the Error class for Numberic ID (Org) API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              HTTP 405: Method Not Allowed
 * 4              authorization failure
 * 5              auth_app_self failure
 * 6              invalid input: orgID
 * 7              is_valid_orgID failure
 * 8              get_numericID_org failure
 */

import { LMError } from '@leismore/lmerror';
class NIDErrorOrg extends LMError {}
export { NIDErrorOrg };
