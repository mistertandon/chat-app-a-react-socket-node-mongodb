const mongoose = require("mongoose");
const shaw256 = require("js-sha256");
const User = mongoose.model("User");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email) throw "Email is manadtory";

  const user = new User({
    name,
    email,
    password: shaw256(password) + process.env.SALT,
  });

  await user.save();

  res.json({
    message: `User ${name} has been register successfully.`,
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.find({
    email,
    password: shaw256(password) + process.env.SALT,
  });

  if (!user) throw "Email and password didn't match";

  const token = await jwt.sign({ is: user._id }, process.env.SECRET);

  res.json({ message: `User has been loggge-in successfully`, token });
};
