const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const test = { phoneNumber, password, firstName, lastName, roleId, currency, language, address, rating } = req.body;

  console.log(test);
  console.log("******");
  

  try {
    const user = new User({ phoneNumber, password, firstName, lastName, roleId, currency, language, address, rating });
    await user.save();

    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.get('/info', requireAuth, async (req, res) => {
  const user = req.user; 
  // console.log(req);
  res.send(user);
});

router.post('/signin', async (req, res) => {
  const { phoneNumber, password } = req.body;
  console.log("*** sign in ***");
  console.log(phoneNumber + " * " + password);

  if (!phoneNumber || !password) {
    return res.status(422).send({ error: 'Must provide phoneNumber and password' });
  }

  const user = await User.findOne({ phoneNumber });
  if (!user) {
    return res.status(422).send({ error: 'Invalid password or phoneNumber' });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or phoneNumber' });
  }
});

module.exports = router;
