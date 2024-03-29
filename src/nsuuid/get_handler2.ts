/**
 * GET Handler 2 - Get numeric ID
 */

import { Request, Response, NextFunction }      from 'express';
import { default as axios, AxiosRequestConfig } from 'axios';
import { NSUUIDError }                          from '../lib/NSUUIDError';
import * as CONFIG                              from '../config.json';
import * as CRED_SELF                           from '../credential/self.json';
const API = {
  url:     ( (CONFIG.app.ssl ? 'https' : 'http') + '://' +
              CONFIG.app.domain + ':'  +
              CONFIG.app.publicPort    +
              CONFIG.api.baseURL       +
              CONFIG.api.numeric.url
           ),
  timeout: CONFIG.api.numeric.timeout
};
const CLIENT_ID  = CONFIG.app.appID;
const TOKEN      = CRED_SELF.token;

function get_handler2(req:Request, res:Response, next:NextFunction):void
{
  let axiosConfig:AxiosRequestConfig = {
    url:             API.url,
    method:          'GET',
    timeout:         API.timeout,
    withCredentials: true,
    auth:            { username: CLIENT_ID, password: TOKEN }
  };

  axios(axiosConfig).then(r => {
    res.locals.nid = String(r.data.id);
    next();
    return;
  }).catch(e => {
    let error = {message:'get Numeric-ID failure', code: '6'};
    let response = {statusCode: '500'};
    next (new NSUUIDError(error, response, e));
    return;
  });
}

export { get_handler2 };
