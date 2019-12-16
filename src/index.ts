/**
 * The main script of id_generator project
 */

// Import modules
import * as express           from 'express';
import cors                   = require('cors');
import { corsOrigin }         from './corsOrigin';
import { error_handler_last } from '@leismore/error_handler_last';
import * as token             from './token/index';
import * as nid               from './nid/index';
import * as sid               from './sid/index';
import * as ruuid             from './ruuid/index';
import * as nsuuid            from './nsuuid/index';
import * as CONFIG            from './config.json';

const corsOptions:cors.CorsOptions = {
  origin:  corsOrigin,
  methods: ['OPTIONS', 'GET']
};

// Init.
let app = express();
app.use( cors(corsOptions) );

// 1. Token
const        TOKEN_URL = CONFIG.api.baseURL + CONFIG.api.token.url;
app.all(     TOKEN_URL, token.all_handler1 );
app.options( TOKEN_URL, ()=>{} );
app.get(     TOKEN_URL, token.get_handler1, token.get_handler2 );

// 2. NID (Numeric ID)
const        NID_URL = CONFIG.api.baseURL + CONFIG.api.numeric.url;
app.all(     NID_URL, nid.all_handler1 );
app.options( NID_URL, ()=>{} );
app.get(     NID_URL, nid.get_handler1, nid.get_handler2 );

// 3. SID (Short ID)
const        SID_URL = CONFIG.api.baseURL + CONFIG.api.short.url;
app.all(     SID_URL, sid.all_handler1 );
app.options( SID_URL, ()=>{} );
app.get(     SID_URL, sid.get_handler1, sid.get_handler2 );

// 4. UUID (Random)
const        RUUID_URL = CONFIG.api.baseURL + CONFIG.api.uuidRand.url;
app.all(     RUUID_URL, ruuid.all_handler1 );
app.options( RUUID_URL, ()=>{} );
app.get(     RUUID_URL, ruuid.get_handler1, ruuid.get_handler2 );

// 5. UUID (Namespace)
const        NSUUID_URL = CONFIG.api.baseURL + CONFIG.api.uuidNS.url;
app.all(     NSUUID_URL, nsuuid.all_handler1 );
app.options( NSUUID_URL, ()=>{} );
app.get(     NSUUID_URL, nsuuid.get_handler1, nsuuid.get_handler2, nsuuid.get_handler3 );

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
