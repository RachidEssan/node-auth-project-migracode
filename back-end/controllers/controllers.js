const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'identi.fy',
  password: '',
  port: 5432,
});

/**
 *    description: this fucntion takes a user attribute key and its value and returns the corresponding user 
    in the data base, if the user does not exist the function returns ? (empty table ? error )
    params:
        table (type string): name of the table that has users
        key (string): name of the field to match in table 
        value (string): the value of the field 
    return:
        json user data
  
 */

const getUser = async (table, key, value) => {
  return await pool
    .query(`SELECT * FROM ${table} WHERE ${key}='${value}'`)
    .then((result) => result.rows)
    .catch((e) => e);
};

const addUser = async (table, userData) => {
  return await pool
    .query(`INSERT INTO ${table} (name, email, password, city, country) VALUES ($1, $2, $3, $4, $5)`, [
      userData.name,
      userData.email,
      userData.password,
      userData.city,
      userData.country,
    ])
    .catch((e) => e);
};

const updateUser = async (table, id, key, value) => {
  return await pool
    .query(`UPDATE ${table} WHERE id=${id} SET ${key}='${value}`)
    .catch((e) => e);
};


const deleteUser = async (table, key, value) => {
  return await pool
    .query(`DELETE * FROM ${table} WHERE ${key}='${value}`)
    .catch((e) => e);
}

module.exports = { getUser, addUser, updateUser, deleteUser };
