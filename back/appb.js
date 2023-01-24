import express from "express";
import cors from 'cors';
import db from '../back/database/db.js'
import productRoutes from '../back/routes/routes.js'

const app = express();

app.use( cors() );
app.use(express.json());
app.use('/products', productRoutes);

try {
    db.authenticate();
    console.log('Connected to DB');
} catch (error) {
    console.log('Connection error');
}

app.listen(8000, () => {
  console.log('Server running in http://localhost:8000/');
})
