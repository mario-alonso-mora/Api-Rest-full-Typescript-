import {  Response } from "express"
import { RequestExt } from "../interfaces/req-ext.interface";
import { handleHttp } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken";




const getItems = (req: RequestExt, resp: Response) => {


    try {


        resp.send({

            data:"ESTA ES LA PERSONA CON SESSION / JWT ACTIVA ",
            user:req.user
        })

    } catch (error) {

        handleHttp(resp, 'ERROR_GET_ORDERS');
    }


}




export { getItems }