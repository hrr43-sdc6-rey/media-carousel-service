const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');
const Experiences = require('./experience.js');

const seed = () => {

  const experiencesData = [];

  for (let i = 1; i <=100; i++) {

    const experience = {
      experienceId: i,
      title: convertTitleCase(faker.lorem.words()),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      category: convertTitleCase(faker.lorem.words()),
      activity: convertTitleCase(faker.lorem.words()),
      averageRating: faker.random.number({min: 1, max: 5}),
      numberOfReviews: faker.random.number({min: 1, max: 100}),
      duration: faker.random.number({min: 1, max: 6}),
      groupSize: faker.random.number({min: 2, max: 40}),
      includes: [],
      cuisine: convertTitleCase(faker.lorem.word()),
      hostedLanguages: [],
      costPerPerson: faker.random.number({min:10, max: 300}),
      imageUrls: [],
      videoUrl: faker.internet.url()
    }

    // add to includes array
    const numIncludes = Math.floor(Math.random() * 4 + 1);

    for (let j = numIncludes; j > 0; j--) {
      let randomWord = convertTitleCase(faker.lorem.word());
      experience.includes.push(randomWord);
    }

    // add to hostedLanguages
    const numLanguages = Math.floor(Math.random() * 4 + 1);

    for (let k = numLanguages; k > 0; k--) {
      let randomWord = convertTitleCase(faker.lorem.word());
      experience.hostedLanguages.push(randomWord);
    }

    // add 5 photos
    for (let m = 5; m > 0; m--) {
      let randomNum = Math.floor(Math.random() * 20 + 1);
      // need to connect to aws s3 for the url
      let url = `https://fec-media.s3.amazonaws.com/photo${randomNum}.jpg`;
      experience.imageUrls.push(url);
    }
    experiencesData.push(experience);
  }

  Experiences.insertMany(experiencesData)
    .then(() => console.log('seeded database'))
    .catch(err => console.error('Error: ', err))
};

function convertTitleCase(string) {
  return string.split(' ').map(word => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

seed();