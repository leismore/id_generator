// Testing 5. Short ID

import { assert }       from 'chai';
import axios            from 'axios';
import * as  APP_CONFIG from '../src/config.json';
import * as TEST_CONFIG from      './config.json';

const PATTERN = /^([346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz]{4}\-){4}[346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz]{4}$/;

const API = (
  (APP_CONFIG.app.ssl ? 'https' : 'http') + '://' +
  `${APP_CONFIG.app.domain}:${APP_CONFIG.app.publicPort}${APP_CONFIG.api.baseURL}${APP_CONFIG.api.short.url}`
);

describe('ID Generator - 5. Short ID', function(){

  it('Should return a short ID', function(){
    return axios.get( API, { auth:
      { username: TEST_CONFIG.client.appID,
        password: TEST_CONFIG.client.token } }
    )
    .then( res => {
      assert
      (
        ( res.status === 200 &&
          String(res.headers['content-type']).includes('application/json') &&
          ( typeof res.data.id === 'string' && PATTERN.test(res.data.id) )
        ),
        'Invalid data'
      );
    })
    .catch( e => {
      assert(false, 'Server failure');
    });
  });

});
