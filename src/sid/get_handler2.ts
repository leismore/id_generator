/**
 * GET Handler 2 - Generate Short ID
 */

import * as express    from 'express';
import * as shortid    from 'shortid';
import { SIDResponse } from '../lib/SIDResponse';
import * as CONFIG     from '../config.json';
const CHARS            = CONFIG.api.short.characters;
const SEED             = CONFIG.api.short.seed;
const WORKER           = CONFIG.api.short.worker;

function get_handler2(_req:express.Request, res:express.Response, _next:express.NextFunction):void
{
  let resp = new SIDResponse(res);

  shortid.characters(CHARS);
  shortid.worker(WORKER);
  shortid.seed(SEED);

  resp.res200(shortid.generate());
}

export { get_handler2 };
