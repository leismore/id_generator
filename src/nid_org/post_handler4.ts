/**
 * POST Handler 4 - Get the new numeric ID
 */

import { Request, Response, NextFunction } from 'express';
import { NIDErrorOrg }                     from '../lib/NIDErrorOrg';
import { get_numericID_org as get_id }     from '../lib/get_numericID_org';
import { Org }                             from '../lib/type/db_doc_org';
import { NIDInputsOrg  as Inputs }         from '../lib/type/NIDInputsOrg';
import { DocumentScope as DB }             from 'nano';

function post_handler4(req:Request, res:Response, next:NextFunction):void
{
    const db:DB<Org>     = res.locals.db;
    const inputs:Inputs  = res.locals.inputs;
    let   newID:string;

    get_id(db, inputs.orgID)

    .then(r => {
        newID = r.status;
        res.locals.newID = newID;
        next();
        return;
    })

    .catch(e => {
        let error = {message: 'get_numericID_org failure', code: '8'};
        let response = {statusCode: '500'};
        next( new NIDErrorOrg(error, response, e) );
        return;
    });
}

export { post_handler4 };
