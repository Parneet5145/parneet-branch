let express = require("express");

const router = express.Router();

/*** Application Controllers ***/
const AuthController = require("./Controllers/AuthController");

/*** Auth Routers ***/
router.get("/register", AuthController.Register);
router.get("/login", AuthController.SignIn);
router.get("/forgotPassword", AuthController.ForgotPassword);

module.exports = router;