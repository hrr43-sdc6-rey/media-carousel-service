const faker = require('faker');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');

const writeData = fs.createWriteStream('csvExperiences.csv');

const csvStringifier = createCsvStringifier({

  header: [
    { id: 'experienceId', title: 'experienceId' },
    { id: 'title', title: 'title' },
    { id: 'city', title: 'city' },
    { id: 'state', title: 'state' },
    { id: 'country', title: 'country' },
    { id: 'category', title: 'category' },
    { id: 'activity', title: 'activity' },
    { id: 'averageRating', title: 'averageRating' },
    { id: 'numberOfReviews', title: 'numberOfReviews' },
    { id: 'duration', title: 'duration' },
    { id: 'groupSize', title: 'groupSize' },
    { id: 'includes', title: 'includes' },
    { id: 'cuisine', title: 'cuisine' },
    { id: 'hostedLanguages', title: 'hostedLanguages' },
    { id: 'costPerPerson', title: 'costPerPerson' },
    { id: 'imageUrls', title: 'imageUrls' },
    { id: 'videoUrl', title: 'videoUrl' },
  ],
});

function convertTitleCase(string) {
  return string.split(' ').map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
}


const writeRecords = (numRecords, writer, encoding, callback) => {
  // const startTime = process.hrtime();

  writeData.write(csvStringifier.getHeaderString(), 'utf8');

  let id = 0;
  let i = numRecords;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let experience = [{
        experienceId: id,
        title: convertTitleCase(faker.lorem.words()),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        category: convertTitleCase(faker.lorem.words()),
        activity: convertTitleCase(faker.lorem.words()),
        averageRating: faker.random.number({ min: 1, max: 5 }),
        numberOfReviews: faker.random.number({ min: 1, max: 100 }),
        duration: faker.random.number({ min: 1, max: 6 }),
        groupSize: faker.random.number({ min: 2, max: 40 }),
        includes: [],
        cuisine: convertTitleCase(faker.lorem.word()),
        hostedLanguages: [],
        costPerPerson: faker.random.number({ min: 10, max: 300 }),
        imageUrls: [],
        videoUrl: faker.internet.url(),
      }];
      // add to includes array
      const numIncludes = Math.floor(Math.random() * 4 + 1);
      for (let j = numIncludes; j > 0; j -= 1) {
        const randomWord = convertTitleCase(faker.lorem.word());
        experience[0].includes.push(randomWord);
      }
      // add to hostedLanguages
      const numLanguages = Math.floor(Math.random() * 4 + 1);
      for (let k = numLanguages; k > 0; k -= 1) {
        const randomWord = convertTitleCase(faker.lorem.word());
        experience[0].hostedLanguages.push(randomWord);
      }
      // add 5 photos
      for (let m = 5; m > 0; m -= 1) {
        const randomNum = Math.floor(Math.random() * 216 + 1);
        // need to connect to aws s3 for the url
        const url = `https://sdc-media-carousel.s3-us-west-1.amazonaws.com/${randomNum}.jpg`;
        experience[0].imageUrls.push(url);
      }

      experience = csvStringifier.stringifyRecords(experience);

      if (i === 0) {
        writer.write(experience, encoding, callback);
      } else {
        ok = writer.write(experience, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // stop early
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();

};

// Number of records to create is first argument
writeRecords(10000000, writeData, 'utf-8', () => {
  writeData.end();
  // console.log(process.hrtime(startTime));
});
