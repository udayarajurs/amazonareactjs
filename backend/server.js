import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRouter.js';
import productRoutes from './routes/productRoutes.js';
const app = express();

dotenv.config();

 app.use('/api/seed', seedRouter)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.log(err.message)
  });


 



app.use('/api/products', productRoutes);





const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});