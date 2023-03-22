import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";



const router = Router();


/* 

* http://localhost:3002/item [GET]

*/

router.get("/:id",logMiddleware, getItem);
router.get("/", getItems);
router.post('/', postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);







export { router };