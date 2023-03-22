import { Request, Response } from "express"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.services";
import { handleHttp } from "../utils/error.handle"

const getItem = async ({ params }: Request, resp: Response) => {

    try {

        const { id } = params

        const getDetailCar = await getCar(id);

        const data = getDetailCar ? getDetailCar :'NOT_FOUND_CAR'

        resp.send(data);

       

    } catch (error) {

        handleHttp(resp, 'ERROR_GET_ITEM');
    }


}

const getItems = async (req: Request, resp: Response) => {


    try {

        const responseCarsGetAll = await getCars();

        resp.send(responseCarsGetAll);

    } catch (error) {

        handleHttp(resp, 'ERROR_GET_ITEMS');
    }


}

const updateItem = async ({ params, body }: Request, resp: Response) => {


    try {

        const { id } = params;

        const carUpdate = await updateCar(id, body);

        resp.send(carUpdate)

    } catch (error) {

        handleHttp(resp, 'ERROR_UPDATE_ITEM');
    }

}


const postItem = async ({ body }: Request, resp: Response) => {


    try {

        const responseCarInsert = await insertCar(body);

        resp.status(201).json({

            responseCarInsert
        })

    } catch (error) {

        handleHttp(resp, 'ERROR_POST_ITEM', error);
    }



}


const deleteItem = async ({params}: Request, resp: Response) => {


    try {

        const {id} = params

        const carDelete = await deleteCar(id);

        resp.send(carDelete)

    } catch (error) {

        handleHttp(resp, 'ERROR_DELETE_ITEM');
    }

}



export { getItem, getItems, updateItem, postItem, deleteItem }