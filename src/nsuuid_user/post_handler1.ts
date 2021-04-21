/**
 * POST Handler 1 - Auth
 */

import { NSUUIDErrorUser }   from '../lib/NSUUIDErrorUser';
import { authAppSelf_handler_generator as generator } from '@leismore/authappself_handler';
import * as CONFIG           from '../config.json';
const API        = CONFIG.auth_app_self.api.author.url;
const HOST_APP   = {
  hostID:     CONFIG.app.appID,
  permission: 'get_uuid_namespace_user'
};
const ERRORS = {
  auth:        new NSUUIDErrorUser({message: 'authorization failure', code: '4'}, {statusCode: '403'}),
  authAppSelf: new NSUUIDErrorUser({message: 'auth_app_self failure', code: '5'}, {statusCode: '500'})
};

const post_handler1 = generator(HOST_APP, API, ERRORS);

export { post_handler1 };
