import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";





const router = Router();


/* 

* http://localhost:3002/auth/register [POST]
 *    http://localhost:3002/auth/login [POST]
*/

router.post("/register", registerCtrl);
router.post("/login",loginCtrl);









export { router };