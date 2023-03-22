import ItemModel from '../models/item';





const getOrders = async () => {

    const responseGetCars = await ItemModel.find({});

    return responseGetCars;

}






export { getOrders }