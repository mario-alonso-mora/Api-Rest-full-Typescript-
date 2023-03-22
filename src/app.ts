import { router } from './routes';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dbConnect from './config/mongo';


const PORT = process.env.PORT || 3001
const app = express();


app.use(cors());
app.use(express.json());
app.use(router);


dbConnect().then( () => {

    console.log('Se ha conectado a la base de datos');

}).catch((err:string) => {
    
    console.log('NO SE HA PODIDO CONECTAR A LA BASE DE DATOS ', err);
});


app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));

