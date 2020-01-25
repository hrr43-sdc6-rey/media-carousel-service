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

const getImages = (expId) => {
  return new Promise((resolve, reject) => {
    let queryString = 'select * from images where experience_id = ?';
    let experience_id = expId;
    connection.query(queryString, experience_id, (err, data) => {
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


