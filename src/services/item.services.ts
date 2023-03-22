import ItemModel from '../models/item';
import { Car } from '../interfaces/car.interface';
import { Request } from 'express';


const getCar = async (id:string) =>{

    

    const responseGetItem = await ItemModel.findById({_id:id});

    return responseGetItem;

}

const getCars = async () =>{

    const responseGetCars = await ItemModel.find({});

    return responseGetCars;

}

const insertCar = async (item:Car) =>{

    const responseInsertCar = await ItemModel.create(item);

    return responseInsertCar;

}

const updateCar = async (id:string,data:Car) =>{

    const responseUpdateCar = await ItemModel.findOneAndUpdate({_id:id},data , {new:true})

    return responseUpdateCar;

}


const deleteCar = async (id:string) =>{

    

    const responseDeleteCar = await ItemModel.findByIdAndDelete({_id:id});

    return responseDeleteCar;

}



export {getCars,insertCar,getCar,updateCar,deleteCar}