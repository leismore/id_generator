/**
 * NIDErrorUser is the Error class for Numberic ID (User) API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              HTTP 405: Method Not Allowed
 * 4              authorization failure
 * 5              auth_app_self failure
 * 6              invalid input: userID
 * 7              is_valid_userID failure
 * 8              get_numericID_user failure
 */

import { LMError } from '@leismore/lmerror';
class NIDErrorUser extends LMError {}
export { NIDErrorUser };
