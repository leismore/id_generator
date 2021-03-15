/**
 * NIDResponse class for the Numeric ID API.
 * Refer to @leismore/response <https://www.npmjs.com/package/@leismore/response>
 */

import { LMResponse as Response } from '@leismore/response';

class NIDResponse extends Response
{
  public res200(id:string):void
  {
    this.send({
      statusCode: '200',
      headers: { 'Content-Type'  : 'application/json',
                 'Cache-Control' : 'no-store' },
      body: {'id': id}
    });
  }
}

export { NIDResponse };
