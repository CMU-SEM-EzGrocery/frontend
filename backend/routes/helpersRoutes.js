const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Order = require('../models/Order');

const router = express.Router();

router.get('/new', async (req, res) => {

  const mission = await Order.find({ stepState: 1 });
  res.send(mission);  

});

router.post('/answer', async (req, res) => {
  const { ans, taskid, user } = req.body;

  if(ans) {
    await Order.updateOne({_id: mongoose.Types.ObjectId(taskid)}, {stepState: 2, helper: user});
    res.send("Accept task successfully!");
  }

  res.send("You have Declined this task successfuly.");
});

router.post('/coming', async (req, res) => {
  const { ans, taskid, user } = req.body;

  if(ans) {
    await Order.updateOne({_id: mongoose.Types.ObjectId(taskid)}, {stepState: 3, helper: user});
    res.send("道路千万条，安全第一条；行车不规范，亲人两行泪！");
  }

  res.send("Something wrong with coming!");
});

module.exports = router;