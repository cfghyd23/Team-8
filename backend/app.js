import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import userRouter from './routers/user-routes.js';

require('./db/conn');
app.use(express.json());

//we link the router files to make our route easy
app.use(require('./router/auth'));
const PORT = process.env.PORT;

//Routes
app.use('/api/users', userRouter);



app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
});