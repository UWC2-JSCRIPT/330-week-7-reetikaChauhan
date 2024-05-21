const express = require("express");
const mustacheExpress = require("mustache-express")
const routes = require("./routes");

const server = express();
server.use(express.json());
server.engine("mustache", mustacheExpress())
server.use(routes);
server.use(express.static('static'));
server.set('view engine', 'mustache');
module.exports = server;