/**
 * All Handler 1 - Prevent not-allowed HTTP methods
 */

import {
    all_handler_generator            as generator,
    all_handler_LMErrorRes_generator as gen_response } from '@leismore/all_handler';
import { SIDError }                from '../lib/SIDError';
import * as CONFIG                 from '../config.json';
const ALLOWED      = CONFIG.api.short.methods;
const ERROR        = new SIDError({message: 'HTTP 405: Method Not Allowed', code: '3'}, gen_response(ALLOWED));
const all_handler1 = generator(ALLOWED, ERROR);

export { all_handler1 };
