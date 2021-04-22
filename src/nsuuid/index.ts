/**
 * UUID (Namespace) API
 *
 * @res.locals
 * {
 *   nid: {string} - Numeric ID
 * }
 */

import { all_handler1 } from './all_handler1';
import { get_handler1 } from './get_handler1';
import { get_handler2 } from './get_handler2';
import { get_handler3 } from './get_handler3';
import { cors_handler } from './cors_handler';

export { all_handler1, get_handler1, get_handler2, get_handler3, cors_handler };
