/**
 * GET Handler 1 - Auth
 */

import { NIDError }       from '../lib/NIDError';
import { authAppSelf_handler_generator as generator } from '@leismore/authappself_handler';
import * as CONFIG        from '../config.json';
const API        = CONFIG.auth_app_self.api.author.url;
const HOST_APP   = {
  hostID:     CONFIG.app.appID,
  permission: 'get_id_numeric'
};
const ERRORS = {
  auth:        new NIDError({message: 'authorization failure', code: '4'}, {statusCode: '403'}),
  authAppSelf: new NIDError({message: 'auth_app_self failure', code: '5'}, {statusCode: '500'})
};

const get_handler1 = generator(HOST_APP, API, ERRORS);

export { get_handler1 };
