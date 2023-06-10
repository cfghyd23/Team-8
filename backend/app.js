const express = require('express');
const nodeMailer = require('nodemailer');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const db = require('./db/db');
dotenv.config({ path: './config.env' });
const userRouter = require('./routers/user-routes');
// const fundraiserRouter = require('./routers/fundraising');
// const orientationRouter = require('./routers/orientation');
// const internshipRouter = require('./routers/internship');
const causeRouter = require('./routers/cause');
const PORT = process.env.PORT;


app.use(express.json());

// Routes
app.use('/api/users', userRouter);
// app.use('/api/fundraisers', fundraiserRouter);
// app.use('/api/orientation', orientationRouter);
// app.use('/api/internship', internshipRouter);
app.use('/api/cause', causeRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
