const db = require('../config/database');

//create profile
const createProfile = async (body) => {
  const { job_title, min_salary, job_type, experience, sector_id, user_id } = body;

  //check user profile exists
  const checkProfile = await db.query('SELECT * FROM profiles WHERE user_id = $1', [user_id]);
  if (checkProfile.rows.length > 0) {
    throw new Error(`Profile already exists`);
  }

  //create profile
  const createProfile = await db.query(
    'INSERT INTO profiles (job_title, min_salary, job_type, experience, sector_id, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [job_title, min_salary, job_type, experience, sector_id, user_id],
  );

  return createProfile.rows[0];
}

//update profile
const updateProfile = async (id, body) => {
  const { job_title, min_salary, job_type, experience, sector_id, user_id } = body;

  //check if profile id exists
  const checkProfile = await db.query('SELECT * FROM profiles WHERE id = $1', [id]);
  if (!checkProfile.rows.length) {
    throw new Error(`Profile not found`);
  }

  //update profile
  const updateProfile = await db.query(
    'UPDATE profiles SET job_title = $1, min_salary = $2, job_type = $3, experience = $4, sector_id = $5, user_id = $6 WHERE id = $7 RETURNING *',
    [job_title, min_salary, job_type, experience, sector_id, user_id, id],
  );

  return updateProfile.rows[0];

}


//export modules
module.exports = {
  createProfile,
  updateProfile,
};