import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();


// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Data Base connection 
import { DatabaseConnection } from './database/index.js';

DatabaseConnection(process.env.MONGO_URI);


// import routes

import { ProductRoute } from './routes/index.js';
import { OrderRoute } from './routes/index.js';

app.use('/api', ProductRoute);
app.use('/api', OrderRoute);






const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    // console.clear()
    console.log(`Server listening on ${PORT}`);
});