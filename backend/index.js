const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
require('./db/config');

const User = require("./db/User");  //User from db user with capital U.


const app = express();


app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp)=>{
    let user = new User(req.body);  //tu save User info (required from ./db/User) make a user with small u.
    let result = await user.save();
    resp.send(result)
})

// const connectDB = async ()=>{
//     mongoose.connect('mongodb://localhost:27017/meet');
//     const logSchema = new mongoose.Schema({});
//     const log = mongoose.model('users',logSchema);
//     const data = await log.find();
//     console.warn(data);
// }
// connectDB();

// app.get("/",(req,resp)=>{
//     resp.send("app is working...")
// });

app.listen(5000)


