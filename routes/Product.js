import express from "express";
import { addProduct, getAllProducts, getProductById, insertMany } from "../controllers/index.js";

const router = express.Router();

router.post('/addproduct', addProduct);
router.get('/getallproduct', getAllProducts);
router.get('/getproductbyid/:id', getProductById);
router.post('/insertmany', insertMany);

export { router as ProductRoute }