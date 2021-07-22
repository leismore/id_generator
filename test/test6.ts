// Testing 6. Shorter ID

import { assert }       from 'chai';
import axios            from 'axios';
import * as  APP_CONFIG from '../src/config.json';
import * as TEST_CONFIG from      './config.json';

const API = (
  (APP_CONFIG.app.ssl ? 'https' : 'http') + '://' +
  `${APP_CONFIG.app.domain}:${APP_CONFIG.app.publicPort}${APP_CONFIG.api.baseURL}${APP_CONFIG.api.shorter.url}`
);

describe('ID Generator - 6. Shorter ID', function(){

  it('Should return a shorter ID', function(){
    return axios.get( API, { auth:
      { username: TEST_CONFIG.client.appID,
        password: TEST_CONFIG.client.token } }
    )
    .then( res => {
      assert
      (
        ( res.status === 200 &&
          String(res.headers['content-type']).includes('application/json') &&
          ( typeof res.data.id === 'string' && res.data.id.length === APP_CONFIG.api.shorter.length )
        ),
        'Invalid data'
      );
    })
    .catch( e => {
      assert(false, 'Server failure');
    });
  });

});
