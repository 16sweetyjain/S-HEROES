const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
//import routes
const routes = require('./routes/index');
//app
const app = express();
// db
mongoose
    .connect(process.env.DATABASE,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));
//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//routes middleware
app.use('/api', routes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});