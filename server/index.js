const express = require('express');
const ejs = require('ejs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3006',
  optionsSuccessStatus: 200,
}));
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
