/**
 * GET Handler 1 - Auth
 */

import { authAppSelf_handler_generator as generator } from '@leismore/authappself_handler';
import { TokenError }     from '../lib/TokenError';
import * as CONFIG        from '../config.json';
const API        = CONFIG.auth_app_self.api.author.url;
const HOST_APP   = {
  hostID:     CONFIG.app.appID,
  permission: 'get_token'
};
const ERRORS = {
  auth:        new TokenError({message: 'authorization failure', code: '5'}, {statusCode: '403'}),
  authAppSelf: new TokenError({message: 'auth_app_self failure', code: '4'}, {statusCode: '500'})
};
const get_handler1 = generator(HOST_APP, API, ERRORS);

export { get_handler1 };
