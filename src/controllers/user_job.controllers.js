const userJobServices = require('../services/user_job.services');

//create a  user job
const createUserJob = async (req, res) => {
  try {
    const userJob = await userJobServices.createUserJob(req.body);
    res.status(201).send(userJob);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//delete user job
const deleteUserJobs = async (req, res) => {
  try {
    const userJobs = await userJobServices.deleteUserJob(req.params.id);
    res.status(200).send(userJobs);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//delete all user jobs by user_id and type
const deleteUserJobsByUserAndType = async (req, res) => {
  const body = {...req.body, uder_id: req.user.id};
  try {
    const userJobs = await userJobServices.deleteUserJobsByUserAndType(body);
    res.status(200).send(userJobs);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//get all user jobs for a user_id and type
const getUserJobsByUserAndType = async (req, res) => {
  const params = {...req.body, user_id: req.user.id, ...req.query};
  try {
    const userJobs = await userJobServices.getUserJobsByUserAndType(params);
    res.status(200).send(userJobs);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
//return all functions
module.exports = {
  createUserJob,
  deleteUserJobs,
  deleteUserJobsByUserAndType,
  getUserJobsByUserAndType
};