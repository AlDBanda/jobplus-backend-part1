const db = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//login a user
const login = async (body) => {
  const { email, password } = body;

  //get user from db
  const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  if (rows.length === 0){
    throw new Error('Username or password incorrect');
  }

  // compare password
  const isMatch = await bcrypt.compare(password, rows[0].password);

  //create token
  const token = jwt.sign({id: rows[0].id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};


//get active user
const active = async ( token ) => {
  //decode toekn
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // get user from db -extend my sql query below so I can join another table to it and using json agg to tidy my output
  const { rows } = await db.query(`
  SELECT * 
  u.id,
  u.email,
  u.first_name,
  u.last_name,
  json_agg(p.*) AS profile
  FROM users  u
  JOIN profiles p ON u.id = p.user_id
  WHERE u.id = $1
  GROUP BY u.id
  `, [decoded.id]);

  return rows[0];
}


//This code exports a function called login which handles the logic for logging in a user. It takes a body parameter, which is expected to contain an email and password property.
//The function first queries the database to retrieve the user with the given email. If no user is found, it throws an error indicating that the username or password is incorrect.
//If a user is found, the function then compares the given password with the hashed password stored in the database using the bcrypt.compare method. If the passwords match, the function creates a JSON web token (JWT) using the jsonwebtoken library. The token includes the user's ID and is signed with a secret key specified in the environment variables. The token also includes an expiration time specified in the environment variables.
//Finally, the function returns the token. This token can be used to authenticate the user in subsequent requests.

module.exports = {
  login,
  active,
};