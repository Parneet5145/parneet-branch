module.exports.SignIn = async (req, res, next) => {
    res.render("frontend/auth/login", { title: "Login to your account" });
};