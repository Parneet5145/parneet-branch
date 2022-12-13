//user register
module.exports.Register = async (req, res, next) => {
    res.render("frontend/auth/register", { title: "Register to your account" });
};

//user login
module.exports.SignIn = async (req, res, next) => {
    res.render("frontend/auth/login", { title: "Login to your account" });
};

//forgot password
module.exports.ForgotPassword = async (req, res, next) => {
    res.render("frontend/auth/forgotPassword", { title: "Password Forgot" });
};