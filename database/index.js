// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// const Experience = require('./experience.js');

// mongoose.set('useCreateIndex', true);

// const db = mongoose.connection;

// const mongooseConnection = 'mongodb://localhost/fec-airbnb';

// mongoose
//   .connect(mongooseConnection, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Connection error: ', err));

const { Pool } = require('pg');
// const Sequelize = require('sequelize');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'airbnb-media-carousel',
  password: 'root',
  port: 5432,
});

// const sequelize = new Sequelize('airbnb-media-carousel', 'root', 'root', {
//   // gimme postgres, please!
//   dialect: 'postgres',
// });

const getExperiences = (expId) => new Promise((resolve, reject) => {
  pool.query('SELECT * FROM experiences where experienceid=$1', [expId], (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

const addExperiences = (experience) => new Promise((resolve, reject) => {
  pool.query(
    'INSERT INTO experiences (experienceid, title, city, state, country, category, activity, averageRating, numberOfReviews, duration, groupSize, includes, cuisine, hostedLanguages, costPerPerson, imageUrls, videoUrl) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9, $10, $11,$12, $13, $14, $15, $16, $17)',
    [experience.experienceid, experience.title, experience.city, experience.country, experience.category, experience.activity, experience.averageRating, experience.numberOfReviews, experience.duration, experience.groupSize, experience.includes, experience.cuisine, experience.hostedLanguages, experience.costPerPerson, experience.imageUrls, experience.videoUrl],
    (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    },
  );
});

const updateExperiences = (expId, experience) => new Promise((resolve, reject) => {
  pool.query(
    'UPDATE experiences SET experienceid = $1, title = $2, city = $3, state = $4, country = $5, category = $6, activity = $7, averageRating = $8, numberOfReviews =$9, duration = $10, groupSize = $11, includes = $12, cuisine = $13, hostedLanguages = $14, costPerPerson = $15, imageUrls = $16, videoUrl = $17',
    [experience.experienceid, experience.title, experience.city, experience.country, experience.category, experience.activity, experience.averageRating, experience.numberOfReviews, experience.duration, experience.groupSize, experience.includes, experience.cuisine, experience.hostedLanguages, experience.costPerPerson, experience.imageUrls, experience.videoUrl],
    (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    },
  );
});


const deleteExperiences = (expId) => new Promise((resolve, reject) => {
  pool.query('DELETE FROM experiences where experienceid=$1', [expId], (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

module.exports = {
  getExperiences, addExperiences, updateExperiences, deleteExperiences,
};
