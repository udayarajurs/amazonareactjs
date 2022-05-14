import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRouter.js';
import productRoutes from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
const app = express();

dotenv.config();



mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.log(err.message)
  });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 


app.use('/api/seed', seedRouter)
app.use('/api/products', productRoutes);
app.use('/api/users', userRouter);


app.use((err, req, res, next) => {
  res.status(500).send({message: err.message}); 
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});