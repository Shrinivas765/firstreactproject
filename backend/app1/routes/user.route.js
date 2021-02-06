module.exports = app => {
  const users = require("../controller/user.controller.js")
  
  let router = require("express").Router()
  router.post("/savedata", users.create)
  app.use("/api",router)
  
};