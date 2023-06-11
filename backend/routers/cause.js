const express = require('express');
const app = express();
const Causecontroller = require('../controllers/cause-controller');

app.post('/createCause', Causecontroller.createCause);
app.get('/getAllCauses', Causecontroller.getAllCauses);
app.get('/getCauseById/:id', Causecontroller.getCauseById);
app.put('/updateCauseById/:id', Causecontroller.updateCauseById);
app.post('/donate', Causecontroller.donate);

module.exports = app;