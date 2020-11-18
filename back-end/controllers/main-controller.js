const signIn = require("../Access/LogIn");
const signUp = require("../Access/signup");

// sign up
const register = async (req, res) => {
  try {
    res.json(await signUp(req.body));
  } catch (err) {
    throw err;
  }
};

//Login
const logIn = signIn;
const Home = (req, res) => {
  res.json("Welcome To Your Market");
};
module.exports = {
  logIn,
  register,
  Home,
};
