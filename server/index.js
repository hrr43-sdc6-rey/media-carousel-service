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
app.use(cors({
  origin: 'http://18.217.113.225:4000',
  optionsSuccessStatus: 200,
}));
app.use(express.static(path.join(__dirname, 'client/build')));

app.engine('html', require('ejs').renderFile);

app.get('/:id', (req, res) => {
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
