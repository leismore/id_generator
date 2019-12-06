/**
 * Authentication
 */

import { default as axios, AxiosRequestConfig } from 'axios';
import { AuthenInputs }                         from './type/AuthenInputs';
import * as CONFIG                              from '../config.json';
const API             = CONFIG.auth_app_self.api.authen.url;

async function authen(input:AuthenInputs):Promise<any>
{
  const axiosConfig:AxiosRequestConfig = {
    url: API,
    method: 'POST',
    data: {
      appID: input.appID,
      token: input.token
    },
    timeout: CONFIG.auth_app_self.api.authen.timeout
  };

  return axios(axiosConfig);
}

export { authen };
