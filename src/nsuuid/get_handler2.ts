/**
 * GET Handler 2 - Get numeric ID
 */

import * as express                             from 'express';
import { default as axios, AxiosRequestConfig } from 'axios';
import { NSUUIDError }                          from '../lib/NSUUIDError';
import * as CONFIG                              from '../config.json';
const API = {
  url:     ('https://' + CONFIG.app.domain  +
                         CONFIG.api.baseURL +
                         CONFIG.api.numeric.url),
  timeout: CONFIG.api.numeric.timeout
};
const CLIENT_ID  = CONFIG.app.appID;
const TOKEN      = CONFIG.app.token;

function get_handler2(_req:express.Request, res:express.Response, next:express.NextFunction):void
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
