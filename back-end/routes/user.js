const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const bodyParser = require('body-parser');

const authenticate = require('../middleware/authenticate');
const generateJWT = require('../utils/generateJWT');
const db = require('../controllers/controllers');

app.use(bodyParser.json());

// user registration / sign-up
app.post('/sign-up', async (req, res) => {
  try {
    const { name, email, password, city, country } = req.body;

    const user = await db.getUser('users', 'email', email);
    if (user.length !== 0) {
      return res.status(400).json({ error: 'User already exists!' });
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = {
      name: name,
      email: email,
      password: bcryptPassword,
      city: city,
      country: country,
    };

    await db.addUser('users', newUser);

    const jwtToken = generateJWT(newUser.email);

    return res.status(201).send({ jwtToken: jwtToken, isAuthenticated: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// user sign-in / login
app.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.getUser('users', 'email', email);
    console.log(user)

    if (user == 0) {
      return res
        .status(401)
        .json({ error: 'Invalid Credential', isAuthenticated: false });
    }

    const isValidPassword = await bcrypt.compare(password, user[0].password);

    if (!isValidPassword) {
      return res
        .status(401)
        .json({ error: 'Invalid Credential', isAuthenticated: false });
    }

    const jwtToken = generateJWT(user[0].id);

    return res.status(200).send({ jwtToken, isAuthenticated: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

// user authorization
app.post('/auth', authenticate, (req, res) => {
  try {
    res.status(200).send({ isAuthenticated: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message, isAuthenticated: false });
  }
});

module.exports = app; // we need to export this router to implement it inside our server.js file
