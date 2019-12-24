// Authorization

import { default as axios, AxiosRequestConfig } from 'axios';
import { AuthorInputs }                         from './type/AuthorInputs';
import * as CONFIG                              from '../config.json';
const API             = CONFIG.auth_app_self.api.author.url;
const TIMEOUT         = CONFIG.auth_app_self.api.author.timeout;

async function author(input:AuthorInputs):Promise<any>
{
  let configAxios:AxiosRequestConfig = {
    url: API,
    method: 'POST',
    data: {
      hostID:     input.hostID,
      permission: input.permission
    },
    timeout: TIMEOUT,
    withCredentials: true,
    auth: {
      username: input.authen.appID,
      password: input.authen.token
    },
    validateStatus: (statusCode:number) => {
      if (statusCode === 403)
      {
        return true;
      }
      else
      {
        return (statusCode >= 200 && statusCode < 300);
      }
    }
  };

  return axios(configAxios);
}

export { author };
