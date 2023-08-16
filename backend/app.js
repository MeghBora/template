const express = require('express');
const app = express();
const product = require("./routes/productRoute");
const connection = require('./db/connection');

//database Connection
connection();

//middlewares
app.use(express.json());
app.use("/api",product);

module.exports = app;