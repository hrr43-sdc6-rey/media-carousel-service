const mysql = require('mysql');
const mysqlConfig = require('../config/mysqlconfig.js');

const connection = mysql.createConnection(mysqlConfig);

const seedData = [
  {
    image_path: 'url1',
    experience_id: 2,
  },
  {
    image_path: 'url2',
    experience_id: 3,
  },
  {
    image_path: 'url3',
    experience_id: 4,
  },
  {
    image_path: 'url4',
    experience_id: 5,
  }
]

const seedDatabase = (data) => {
  console.log('data', data);
  var queryString = 'insert into images(image_path, experience_id) values (?, ?)';

  for (var i = 0; i < data.length; i++) {
    var params = [data[i].image_path, data[i].experience_id];
    connection.query(queryString, params, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        console.log(res);
      }
    })
  }
}

seedDatabase(seedData);