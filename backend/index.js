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
    result = result.toObject();
    delete result.password; //to don't show password in body of post response
    resp.send(result)
})


app.post("/login",async(req, resp)=>{
    // console.log(req.body)
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            resp.send(user);
        }
        else{
            resp.send({result:"No user found"})
        }
    }
    else{
        resp.send({result:"No user found"})
    }
  
    
} )



app.listen(5000)


