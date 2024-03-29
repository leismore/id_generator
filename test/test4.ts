// Testing 4. Numeric ID (User)

import { assert }       from 'chai';
import axios            from 'axios';
import * as  APP_CONFIG from '../src/config.json';
import * as TEST_CONFIG from      './config.json';

const API = (
  (APP_CONFIG.app.ssl ? 'https' : 'http') + '://' +
  `${APP_CONFIG.app.domain}:${APP_CONFIG.app.publicPort}${APP_CONFIG.api.baseURL}${APP_CONFIG.api.numericUser.url}`
);

const pattern = /^\d+$/;

describe('ID Generator - 4. Numeric ID (User)', function(){

  it('Should return a numeric ID', function(){
    return axios.post( API, {userID: TEST_CONFIG.user.userID}, { auth:
      { username: TEST_CONFIG.client.appID,
        password: TEST_CONFIG.client.token }, headers:{'Content-Type': 'application/json'} }
    )
    .then( res => {
      assert
      (
        ( res.status === 200 &&
          String(res.headers['content-type']).includes('application/json') &&
          pattern.test(res.data.id)
        ),
        'Invalid data'
      );
    })
    .catch( e => {
      assert(false, 'Server failure');
    });
  });

});
