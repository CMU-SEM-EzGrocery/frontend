const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');
const requestersRoutes = require('./routes/requestersRoutes');
const helpersRoutes = require('./routes/helpersRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/users', authRoutes);
app.use('/requesters', requireAuth, requestersRoutes);
app.use('/helpers', requireAuth, helpersRoutes);

const mongoUri =
  'mongodb://localhost:27017/lynchezgorcery';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
