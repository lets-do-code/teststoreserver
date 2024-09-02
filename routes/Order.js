import express from "express";
import { cancelledOrderById, placeOrder } from "../controllers/index.js";


const router = express.Router();


router.post('/placeorder', placeOrder);
router.post('/cancelorderbyid/:id', cancelledOrderById);


export { router as OrderRoute }