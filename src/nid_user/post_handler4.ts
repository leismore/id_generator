/**
 * POST Handler 4 - Get the new numeric ID
 */

import { Request, Response, NextFunction } from 'express';
import { NIDErrorUser }                    from '../lib/NIDErrorUser';
import { get_numericID_user as get_id }    from '../lib/get_numericID_user';
import { User }                            from '../lib/type/db_doc_user';
import { NIDInputsUser as Inputs }         from '../lib/type/NIDInputsUser';
import { DocumentScope as DB }             from 'nano';
import { connect_db }                      from '../lib/connect_db';
import * as CONFIG                         from '../config.json';

const DB_NAME = CONFIG.couchdb.dbPrefix + '_user';

function post_handler4(req:Request, res:Response, next:NextFunction):void
{
    const inputs:Inputs  = res.locals.inputs;
    let   db:DB<User>;
    let   newID:string;

    // Connect to DB
    try {
        db = connect_db().use(DB_NAME);
    } catch (e) {
        let error = {message: 'CouchDB: connection failure', code: '2'};
        let response = {statusCode: '500'};
        // @ts-ignore
        next( new NIDErrorUser(error, response, e) );
        return;
    }
    
    // Get new ID
    get_id(db, inputs.userID)

    .then(r => {
        newID = r.status;
        res.locals.newID = newID;
        next();
        return;
    })

    .catch(e => {
        let error = {message: 'get_numericID_user failure', code: '8'};
        let response = {statusCode: '500'};
        next( new NIDErrorUser(error, response, e) );
        return;
    });
}

export { post_handler4 };
