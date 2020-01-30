const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Experience = require('./experience.js');

mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

let mongooseConnection = 'mongodb://localhost/fec-airbnb';

mongoose
  .connect(mongooseConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error: ', err));

const getExperiences = (expId) => {
  let experienceId = expId;

  return new Promise((resolve, reject) => {
    Experience.find({ experienceId })
      .exec((err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
  });
};

module.exports = { db, getExperiences };


