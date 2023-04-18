const db = require ('../config/database');

const createUserJob = async (body) => {
  const { user_id, job_id, type } = body;

  //check user_id and job_id exist and type exist (dups)
  const checkUserJob = await db.query (
    'SELECT * FROM user_jobs WHERE user_id = $1 AND job_id = $2 AND type = $3',
    [user_id, job_id, type]
  );

  if (checkUserJob.rows.length > 0) {
    throw new Error ('User already apllied for this job');
  }
  
  const { rows } = await db.query (
    'INSERT INTO user_jobs (user_id, job_id, type) VALUES ($1, $2, $3) RETURNING *',
    [user_id, job_id, type]
  );

  return rows [0];
}

//delete user jobs
const deleteUserJob = async (id) => {
  const { rows } = await db.query ('DELETE FROM user_jobs WHERE id = $1 RETURNING *', [id]);
  return rows [0];
}

//delete all user jobs by user_id and type
const deleteUserJobsByUserAndType = async (body) => {
  const { user_id, type } = body;
  const { rows } = await db.query ('DELETE FROM user_jobs WHERE user_id = $1 AND type = $2 RETURNING *', [user_id, type]);
  return rows [0];
}

//get all user jobs by user_id and type
const getUserJobsByUserAndType = async (body) => {
  const { user_id, type } = body;
  const { rows } = await db.query (
  `
  SELECT * 
  FROM jobs
  LEFT JOIN companies ON jobs.company_id = companies.id
  WHERE jobs.id IN (
    SELECT job_id
    FROM user_jobs
    WHERE user_id = $1 AND type = $2
  )
  `,
[user_id, type]
);
  return rows [0];
}

//return all functions
module.exports = {
  createUserJob,
  deleteUserJob,
  deleteUserJobsByUserAndType,
  getUserJobsByUserAndType
};