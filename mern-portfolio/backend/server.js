const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app  = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

//connect to mongoDB
mongoose.connect(uri, { 
  useNewUrlParser    : true,
  useCreateIndex     : true,
  useUnifiedTopology : true
});
const connection = mongoose.connection;

//check connect to mongoDB
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

//load router
const clicksRouter = require('./routes/clicks');

//router middleware
app.use('/clicks', clicksRouter);

//check if server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
