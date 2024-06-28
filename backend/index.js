const express = require('express');
// const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const router = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();





const app = express();


app.use(cors({credentials: true, origin:"http://localhost:5173"}));
app.use(cookieParser());
app.use(express.json());


app.use('/api', router);


mongoose.connect('mongodb://localhost:27017/meet');

 


app.listen(5001, ()=> {
    console.log("Listening to localhost 5000")
})




