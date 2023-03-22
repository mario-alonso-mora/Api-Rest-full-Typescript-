import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, resp: Response) => {

    try {



    } catch (error) {

        handleHttp(resp, 'ERROR_GET_BLOG');
    }


}

const getItems = (req: Request, resp: Response) => {


    try {


    } catch (error) {

        handleHttp(resp, 'ERROR_GET_BLOGS');
    }


}

const updateItem = (req: Request, resp: Response) => {


    try {


    } catch (error) {

        handleHttp(resp, 'ERROR_UPDATE_BLOG');
    }

}


const postItem = ({ body }: Request, resp: Response) => {


    try {

        //const {body} = req;

        resp.send({ body })

    } catch (error) {

        handleHttp(resp, 'ERROR_POST_BLOG');
    }



}


const deleteItem = (req: Request, resp: Response) => {


    try {


    } catch (error) {

        handleHttp(resp, 'ERROR_DELETE_BLOG');
    }

}



export { getItem, getItems, updateItem, postItem, deleteItem }