/**
 * All Handler 1 - Prevent not-allowed HTTP methods
 */

import { generator, gen_response } from '@leismore/all_handler';
import { TokenError }              from '../lib/TokenError';
const ALLOWED      = ['OPTIONS', 'GET'];
const ERROR        = new TokenError({message: 'HTTP 405: Method Not Allowed', code: '3'}, gen_response(ALLOWED));
const all_handler1 = generator(ALLOWED, ERROR);

export { all_handler1 };
