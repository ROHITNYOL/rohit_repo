
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { google } = require("googleapis");
const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");
require('dotenv').config();
const googleRoutes = require("./routes/googleRoutes");

const app = express();

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});

mongoose
  .connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);


// Initialize OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);
console.log(process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL);
//initialising a session basically to store some data in session
app.use(
  session({
    secret: process.env.SESSION_SECRET,//random secret anything for our session
    resave: false,//to not save previous data which is unneccessary for us
    saveUninitialized: false,//not saving that prev data
    cookie: { secure: true }, // Ensure secure cookie setting for production
  })
);

app.use(cookieParser());

app.use(express.json());
app.use("/", authRoutes);
app.use("/", googleRoutes);



