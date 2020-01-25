const mysqlConfig = require('../config/mysqlconfig.js');
const mysql = require('mysql');


const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if(err) {
    throw err;
  } else {
    console.log('mySQL connected');
  }
});

const getImages = () => {
  return new Promise((resolve, reject) => {
    var queryString = 'select * from images';
    connection.query(queryString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  getImages: getImages,
}


