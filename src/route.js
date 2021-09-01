const express = require("express");

const route = express.Router();

route.get("/", (req, res) => res.render("index", { page: "chat" }));
route.get("/login", (req, res) => res.render("login", { page: "login" }));

module.exports = route;
