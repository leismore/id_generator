/**
 * SIDResponse class for the Short ID API.
 * Refer to @leismore/response <https://www.npmjs.com/package/@leismore/response>
 */

import { Response } from '@leismore/response';

class SIDResponse extends Response
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

export { SIDResponse };
