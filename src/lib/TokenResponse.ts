/**
 * TokenResponse class for the Token API.
 * Refer to @leismore/response <https://www.npmjs.com/package/@leismore/response>
 */

import { LMResponse as Response } from '@leismore/response';

class TokenResponse extends Response
{
  public res200(token:string):void
  {
    this.send({
      statusCode: '200',
      headers: { 'Content-Type'  : 'application/json',
                 'Cache-Control' : 'no-store' },
      body: {'token': token, 'generated': Date.now()}
    });
  }
}

export { TokenResponse };
