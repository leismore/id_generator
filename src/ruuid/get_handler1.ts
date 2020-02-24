/**
 * GET Handler 1 - Auth
 */

import { generator }      from '@leismore/authappself_handler';
import { RUUIDError }     from '../lib/RUUIDError';
import * as CONFIG        from '../config.json';
const API        = CONFIG.auth_app_self.api.author.url;
const HOST_APP   = {
  hostID:     CONFIG.app.appID,
  permission: 'get_uuid_rand'
};
const ERRORS = {
  auth:        new RUUIDError({message: 'authorization failure', code: '4'}, {statusCode: '403'}),
  authAppSelf: new RUUIDError({message: 'auth_app_self failure', code: '5'}, {statusCode: '500'})
};
const get_handler1 = generator(HOST_APP, API, ERRORS);

export { get_handler1 };
