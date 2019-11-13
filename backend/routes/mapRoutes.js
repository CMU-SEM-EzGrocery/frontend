const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Order = require('../models/Order');

const router = express.Router();

const googleMapClient = require('@google/maps').createClient({
  key: 'AIzaSyDAh6mSKCvdWrz-eim6Ga7b_CwVobofx_c'
});

router.get('/place', async (req, res) => {
  const { place } = req.body;
  const user = req.user;
  
  const request = {
    query: place,
  };

  googleMapClient.places(request, (err, response) => {
    res.send(response);
  });

});

router.get('/route', async (req, res) => {
  const { st, ed, way } = req.body;
  const user = req.user;

  const paras = {
    origin: st,
    destination: ed,
    mode: way
  };

  googleMapClient.directions(paras, (err, response) => {
    res.send(response);
  });

});

module.exports = router;