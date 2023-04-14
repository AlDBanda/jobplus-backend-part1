const userServices = require('../services/user.services');

// Create and Save a new User
const createUser = async (req, res) => {
  const { first_name, last_name, email, password, confirm_password } = req.body;
  try {
  const user = await userServices.createUser(req.body);
  return res.status(201).send({message: 'User created', user});
 } catch (error) {
  return res.status(400).send(error.message);
 }
}

//export all the functions
module.exports = {
  createUser,
};
