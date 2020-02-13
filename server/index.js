const express = require('express');
const ejs = require('ejs');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.engine('html', ejs.renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});

// Create
app.post('/api/experiences/', (req, res) => {
  // console.log(req.body);
  // res.status(200).end(JSON.stringify(req.body));
  db.addExperiences(req.body)
    .then((data) => {
      res.status(200).end(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
});

// Read
app.get('/api/experiences/:id', (req, res) => {
  const experienceId = parseInt(req.params.id, 10);

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

// Update
app.put('/api/experiences/:id', (req, res) => {
  const experienceId = parseInt(req.params.id, 10);
  // console.log(req.body);
  // res.status(200).end(JSON.stringify(req.body));
  db.updateExperiences(experienceId, req.body)
    .then((data) => {
      res.status(200).end(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
});

// Delete
app.delete('/api/experiences/:id', (req, res) => {
  const experienceId = parseInt(req.params.id, 10);
  // console.log(req.body);
  // res.status(200).end(JSON.stringify(req.body));
  db.deleteExperiences(experienceId)
    .then((data) => {
      res.status(200).end(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
