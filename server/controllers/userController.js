const bcrypt = require("bcrypt");
const userService = require("./../services/userService");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, password, firstname, lastname, nickname } = req.body;

  try {
    const response = await userService.findOneUser(email);
    if (response)
      return res.status(400).json({ message: "Thie Email already used" });

    const hash = await bcrypt.hash(password, 10);

    await userService.createUser({ email, password: hash , firstname, lastname, nickname});

    res.status(200).json({ message: "register success" });
  } catch (err) {
    return res.status(400).json(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await userService.findOneUser(email);
    if (!response)
      return res.status(404).json({ message: "Invalid email or password" });
    const {nickname} = response
    console.log(nickname)

    const compare = await bcrypt.compare(password, response.password);
    if (!compare)
      return res.status(403).json({ message: "Invalid email or password" });

    const token = await jwt.sign(
      { nickname:nickname, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "login success", token });
  } catch (err) {
    return res.status(400).json(err);
  }
};

const test = async(req,res) => {
    res.json(req.body)
}

module.exports = {
  register,
  login,
  test,
};
