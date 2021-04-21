/**
 * POST Handler 3 - Get numeric ID
 */

import { Request, Response, NextFunction }      from 'express';
import { default as axios, AxiosRequestConfig } from 'axios';
import { NSUUIDErrorOrg }                       from '../lib/NSUUIDErrorOrg';
import { NSUUIDInputsOrg as Inputs }            from '../lib/type/NSUUIDInputsOrg';
import * as CONFIG                              from '../config.json';
import * as CRED_SELF                           from '../credential/self.json';
const API = {
  url:     ( (CONFIG.app.ssl ? 'https' : 'http') + '://' +
              CONFIG.app.domain + ':'  +
              CONFIG.app.publicPort    +
              CONFIG.api.baseURL       +
              CONFIG.api.numericOrg.url
           ),
  timeout: CONFIG.api.numericOrg.timeout
};
const CLIENT_ID  = CONFIG.app.appID;
const TOKEN      = CRED_SELF.token;

function post_handler3(req:Request, res:Response, next:NextFunction):void
{
  const inputs:Inputs = res.locals.inputs;
  let   nid:string;

  let axiosConfig:AxiosRequestConfig = {
    url:             API.url,
    method:          'POST',
    timeout:         API.timeout,
    withCredentials: true,
    auth:            { username: CLIENT_ID, password: TOKEN },
    headers:         { 'Content-Type'  : 'application/json' },
    data:            { orgID: inputs.orgID }
  };

  axios(axiosConfig).then(r => {
    nid = String(r.data.id);
    res.locals.nid = nid;
    next();
    return;
  }).catch(e => {
      if ( e.response && String(e.response.status) === '415' &&
           e.response.data.error === 'invalid_orgID' )
      {
        let error = {message: 'invalid input: orgID', code: '6'};
        let response = {
            statusCode:   '415',
            headers:    { 'Content-Type': 'application/json' },
            body:       { 'error':        'invalid_orgID' }
        };
        next( new NSUUIDErrorOrg(error, response, e) );
        return;
      }
      else
      {
        let error = {message:'get Numeric-ID failure', code: '7'};
        let response = {statusCode: '500'};
        next (new NSUUIDErrorOrg(error, response, e));
        return;
      }
  });
}

export { post_handler3 };
