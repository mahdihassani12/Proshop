import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
connectDB();

const port = process.env.PORT || 5000;
const app = express();

import products from './routes/products.js';
import home from './routes/home.js';

app.use('/', home);
app.use('/api/products', products);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is runing on port ${port}`));
