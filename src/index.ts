/**
 * The main script of id_generator project
 * 
 * @app.locals
 * {
 *   myorg:
 *   {
 *     orgID: {UUID} - The organization operating this application
 *   }
 * }
 */

// Import modules
import * as express           from 'express';
import { get_handler as head_handler } from '@leismore/get_handler';
import { error_handler_last } from '@leismore/error_handler_last';
import * as init              from './init/index';
import * as token             from './token/index';
import * as nid               from './nid/index';
import * as nidOrg            from './nid_org/index';
import * as nidUser           from './nid_user/index';
import * as sid               from './sid/index';
import * as ruuid             from './ruuid/index';
import * as nsuuid            from './nsuuid/index';
import * as nsuuidOrg         from './nsuuid_org/index';
import * as nsuuidUser        from './nsuuid_user/index';
import * as CONFIG            from './config.json';

// Init.
let app = express();
app.use( init.init_handler1 );

// 1. Token
const        TOKEN_URL = CONFIG.api.baseURL + CONFIG.api.token.url;
app.use(     TOKEN_URL, token.cors_handler );
app.all(     TOKEN_URL, token.all_handler1 );
app.options( TOKEN_URL, ()=>{} );
app.head(    TOKEN_URL, head_handler );
app.get(     TOKEN_URL, token.get_handler1, token.get_handler2 );

// 2. NID (Numeric ID)
const        NID_URL = CONFIG.api.baseURL + CONFIG.api.numeric.url;
app.use(     NID_URL, nid.cors_handler );
app.all(     NID_URL, nid.all_handler1 );
app.options( NID_URL, ()=>{} );
app.head(    NID_URL, head_handler );
app.get(     NID_URL, nid.get_handler1, nid.get_handler2 );

// 3. NID (Numeric ID) Org
const        NID_ORG_URL = CONFIG.api.baseURL + CONFIG.api.numericOrg.url;
app.use(     NID_ORG_URL, nidOrg.cors_handler );
app.all(     NID_ORG_URL, nidOrg.all_handler1 );
app.options( NID_ORG_URL, ()=>{} );
app.head(    NID_ORG_URL, head_handler );
app.get(     NID_ORG_URL, head_handler );
app.post(    NID_ORG_URL,
  nidOrg.post_handler1, nidOrg.post_handler2,
  nidOrg.post_handler3, nidOrg.post_handler4,
  nidOrg.post_handler5
);

// 4. NID (Numeric ID) User
const        NID_USER_URL = CONFIG.api.baseURL + CONFIG.api.numericUser.url;
app.use(     NID_USER_URL, nidUser.cors_handler );
app.all(     NID_USER_URL, nidUser.all_handler1 );
app.options( NID_USER_URL, ()=>{} );
app.head(    NID_USER_URL, head_handler );
app.get(     NID_USER_URL, head_handler );
app.post(    NID_USER_URL,
  nidUser.post_handler1, nidUser.post_handler2,
  nidUser.post_handler3, nidUser.post_handler4,
  nidUser.post_handler5
);

// 5. SID (Short ID)
const        SID_URL = CONFIG.api.baseURL + CONFIG.api.short.url;
app.use(     SID_URL, sid.cors_handler );
app.all(     SID_URL, sid.all_handler1 );
app.options( SID_URL, ()=>{} );
app.head(    SID_URL, head_handler );
app.get(     SID_URL, sid.get_handler1, sid.get_handler2 );

// 6. UUID (Random)
const        RUUID_URL = CONFIG.api.baseURL + CONFIG.api.uuidRand.url;
app.use(     RUUID_URL, ruuid.cors_handler );
app.all(     RUUID_URL, ruuid.all_handler1 );
app.options( RUUID_URL, ()=>{} );
app.head(    RUUID_URL, head_handler );
app.get(     RUUID_URL, ruuid.get_handler1, ruuid.get_handler2 );

// 7. UUID (Namespace)
const        NSUUID_URL = CONFIG.api.baseURL + CONFIG.api.uuidNS.url;
app.use(     NSUUID_URL, nsuuid.cors_handler );
app.all(     NSUUID_URL, nsuuid.all_handler1 );
app.options( NSUUID_URL, ()=>{} );
app.head(    NSUUID_URL, head_handler );
app.get(     NSUUID_URL, nsuuid.get_handler1, nsuuid.get_handler2, nsuuid.get_handler3 );

// 8. UUID (Namespace) Org
const        NSUUID_ORG_URL = CONFIG.api.baseURL + CONFIG.api.uuidNSOrg.url;
app.use(     NSUUID_ORG_URL, nsuuidOrg.cors_handler );
app.all(     NSUUID_ORG_URL, nsuuidOrg.all_handler1 );
app.options( NSUUID_ORG_URL, ()=>{} );
app.head(    NSUUID_ORG_URL, head_handler );
app.get(     NSUUID_ORG_URL, head_handler );
app.post(    NSUUID_ORG_URL,
  nsuuidOrg.post_handler1, nsuuidOrg.post_handler2,
  nsuuidOrg.post_handler3, nsuuidOrg.post_handler4,
  nsuuidOrg.post_handler5
);

// 9. UUID (Namespace) User
const        NSUUID_USER_URL = CONFIG.api.baseURL + CONFIG.api.uuidNSUser.url;
app.use(     NSUUID_USER_URL, nsuuidUser.cors_handler );
app.all(     NSUUID_USER_URL, nsuuidUser.all_handler1 );
app.options( NSUUID_USER_URL, ()=>{} );
app.head(    NSUUID_USER_URL, head_handler );
app.get(     NSUUID_USER_URL, head_handler );
app.post(    NSUUID_USER_URL,
  nsuuidUser.post_handler1, nsuuidUser.post_handler2,
  nsuuidUser.post_handler3, nsuuidUser.post_handler4,
  nsuuidUser.post_handler5
);

// Error handling
app.use( error_handler_last );

// Start server
app.listen( Number(CONFIG.app.port),
            CONFIG.app.host,
            CONFIG.app.backlog,
  () => {
    console.log(
      `[${CONFIG.app.projectName}]` + ` is working on ` +
      `<${CONFIG.app.host}:${CONFIG.app.port}>`
    );
  }
);
