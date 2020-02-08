const express = require('express');
const ejs = require('ejs');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
// app.use(cors({
//   origin: 'http://18.217.113.225:4000',
//   optionsSuccessStatus: 200,
// }));
// const whitelist = ['http://18.222.165.232:4000', 'http://18.223.132.12:4000', 'http://18.217.113.225:4000', 'http://localhost:4000', 'ec2-18-217-113-225.us-east-2.compute.amazonaws.com:3001', 'ec2-18-217-113-225.us-east-2.compute.amazonaws.com:4000'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

app.use(express.static(path.join(__dirname, 'client/build')));

// app.engine('html', require('ejs').renderFile);
app.engine('html', ejs.renderFile);

app.get('/:id', (req, res) => {
  console.log('req.id', req.params);
  res.render('../public/index.html');
});

app.get('/api/experiences/:id', (req, res) => {
  const experienceId = parseInt(req.params.id);

  db.getExperiences(experienceId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
