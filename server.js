"use strict";

require("dotenv").config({
    path: __dirname + "/.env",
});

const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

// Parsers for POST data
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Include Services API File
app.use(require("./src"));

// set the view engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//set public folder path
app.use(express.static(__dirname + '/public'));

/*** Get port from environment and store in Express. ***/
const port = process.env.PORT || "8013";
app.listen(port, function () {
    console.log(`App started on port ${port}`);
});


/*** Create HTTP server. ***/
var http = require("http");
const server = http.createServer(app);