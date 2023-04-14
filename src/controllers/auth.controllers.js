const authServices = require('../services/auth.services');


// login user
const login = async (req, res) => {
try {
  const token = await authServices.login(req.body);
  request.session = { token: token };
  res.status(200).json({ token });
 } catch (error) {
  res.status(400).json({ error: err.message });
 }
};

//logout user
const logout = async (req, res) => {
  req.session = null;
  res.status(200).json({ message: 'Logout successfully' });
};

//get active user
const active = async (req, res) => {
  try {
    const user = await authServices.active(req.session.token);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

//export all functions
module.exports = {
  login,
  logout,
  active,
};