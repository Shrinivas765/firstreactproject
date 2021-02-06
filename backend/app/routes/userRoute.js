const express = require ("express")
router = express.Router();
usersRoute = require("./controller/UserControllers.js")
router.get("/",usersRoute.usersController)
module.exports = router;