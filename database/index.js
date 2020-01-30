const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Experiences = require('./experience.js');

mongoose.set('useCreateIndex', true);

let mongooseConnection = 'mongodb://localhost/fec-airbnb';

mongoose
  .connect(mongooseConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error: ', err));

const db = mongoose.connection;

module.exports = db;


