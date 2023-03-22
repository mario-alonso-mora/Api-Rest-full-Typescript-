import { Router } from 'express';
import { readdirSync } from 'fs';




const PATH_ROUTER = `${__dirname}`

const router = Router();



/* 

 * Aqui esta leyendo dos archivos el index.ts item.ts
* nosotros queremos quitarle el .ts al nombre del archivo
* para que sea igual al nombre del prefijo de la ruta

*

*/


const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};






readdirSync(PATH_ROUTER).filter((fileName) => {

    const cleanName = cleanFileName(fileName);

    // con esto no usamos el index como ruta y solo se queda el item como archivo de ruta principal

    if (cleanName !== "'index'") {

        //aqui haremos una importacion dinamica propia de TS

        import(`./${cleanName}`).then((moduleRouter) => {

            router.use(`/${cleanName}`, moduleRouter.router);

        });

    }


});








export { router };