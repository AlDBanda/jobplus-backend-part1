const jobSkillServices = require('../services/job_skill.services');

//create job skills
const createJobSkills = async (req, res) => {
  try {
    const body = req.body;
    const jobSkills = await jobSkillServices.createJobSkills(req.body);
    res.status(201).json(jobSkills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//delete job skills
const deleteJobSkills = async (req, res) => {
  try {
    const id = req.params.id;
    const jobSkills = await jobSkillServices.deleteJobSkills(id);
    return res.status(200).json({ message: 'Deleted succesfully', jobSkills });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

//return all functions
module.exports = {
  createJobSkills,
  deleteJobSkills
};