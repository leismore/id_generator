/**
 * parse_httpAuth function: Parse HTTP Authorization header.
 * @throw {IDError}
 */

import * as auth        from 'basic-auth';
import { AuthenInputs } from './type/AuthenInputs';
import { IDError }      from './IDError';

function parse_httpAuth(httpAuth:string): AuthenInputs
{
  let credential:AuthenInputs;

  let parsed = auth.parse(String(httpAuth));
  if (parsed === undefined)
  {
    let error = {message: 'invalid credential', code: '3'};
    let response = {statusCode: '403'};
    throw new IDError(error, response);
  }
  else
  {
    credential = {
      appID: parsed.name,
      token: parsed.pass
    };

    if (credential.appID.length === 0 || credential.token.length === 0)
    {
      let error = {message: 'invalid credential', code: '3'};
      let response = {statusCode: '403'};
      throw new IDError(error, response);
    }
    else
    {
      return credential;
    }
  }
}

export { parse_httpAuth };
