/**
 * RUUIDResponse class for the UUID (Random) API.
 * Refer to @leismore/response <https://www.npmjs.com/package/@leismore/response>
 */

import { Response } from '@leismore/response';

class RUUIDResponse extends Response
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

export { RUUIDResponse };
