const router = require('express-promise-router')();
const jobSkillController = require('../controllers/job_skill.controllers');
const auth = require('../middlewares/auth.middleware');

router.post('/job_skills', auth, jobSkillController.createJobSkills);
router.delete('/job_skills/:id', auth, jobSkillController.deleteJobSkills);

module.exports = router;
