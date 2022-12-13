let express = require("express");

const router = express.Router();

/*** Application Controllers ***/
const AuthController = require("./Controllers/AuthController");

/*** Auth Routers ***/
router.get("/login", AuthController.SignIn);


module.exports = router;