// Testing 7. UUID (Namespace)

import { assert }       from 'chai';
import axios            from 'axios';
import * as  APP_CONFIG from '../src/config.json';
import * as TEST_CONFIG from      './config.json';

const API = (
  (APP_CONFIG.app.ssl ? 'https' : 'http') + '://' +
  `${APP_CONFIG.app.domain}:${APP_CONFIG.app.publicPort}${APP_CONFIG.api.baseURL}${APP_CONFIG.api.uuidNS.url}`
);

describe('ID Generator - 7. UUID (Namespace)', function(){

  it('Should return an UUID (Namespace)', function(){
    return axios.get( API, { auth:
      { username: TEST_CONFIG.client.appID,
        password: TEST_CONFIG.client.token } }
    )
    .then( res => {
      assert
      (
        ( res.status === 200 &&
          String(res.headers['content-type']).includes('application/json') &&
          ( typeof res.data.id === 'string' && res.data.id.length !== 0 )
        ),
        'Invalid data'
      );
    })
    .catch( e => {
      assert(false, 'Server failure');
    });
  });

});
