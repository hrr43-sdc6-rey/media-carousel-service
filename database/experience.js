const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  experienceId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: String,
  city: String,
  state: String,
  country: String,
  category: String,
  activity: String,
  averageRating: Number,
  numberOfReviews: Number,
  duration: Number,
  groupSize: Number,
  includes: [],
  cuisine: String,
  hostedLanguages: [],
  costPerPerson: {
    type: Number,
    required: true,
  },
  imageUrls: [],
  videoUrl: String,
});

const Experience = mongoose.model('Experience', experienceSchema);


module.exports = Experience;
