const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Order = require('../models/Order');

const router = express.Router();

router.post('/new', async (req, res) => {
  try {
    // console.log(req.body);
    const { stPoint, midPoint, edPoint, tripTime } = req.body;
    const user = req.user;
    const newOrder = new Order({
      stepState: 1,
      tripInfo: {stPoint, midPoint, edPoint, price:'10', tripTime, },
      requester: user
    });
    // console.log(newOrder);
    await newOrder.save();
    res.send(newOrder);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.get('/allorders', async (req, res) => {
  const user = req.user;
  const allOrders = await Order.find({ 'requester._id': user._id});
  res.json(allOrders);
})

router.get('/update', async (req, res) => {

  const { ans, taskid } = req.body;
  const user = req.user;
  const targetOrder = await Order.find({ _id: taskid });
  res.send(targetOrder);
});

router.post('/finish', async (req, res) => {
  const { ans, taskid } = req.body;
  const user = req.user;

  if(ans) {
    await Order.updateOne({_id: mongoose.Types.ObjectId(taskid)}, {stepState: 6, helper: user});
    res.send("感谢使用Ez！");
  }

  res.send("Something wrong with finish!");
});


router.post('/cancel', async (req, res) => {
  const { ans, taskid } = req.body;
  const user = req.user;

  if(ans) {
    await Order.updateOne({_id: mongoose.Types.ObjectId(taskid)}, {stepState: 7, helper: user});
    res.send("为啥要cancel！");
  }

  res.send("Something wrong with cancel!");
});

module.exports = router;