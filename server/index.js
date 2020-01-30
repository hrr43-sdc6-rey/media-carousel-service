const express = require('express');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;
const db = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html', require('ejs').renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
})

app.get('/api/experiences/:id', (req, res) => {
  // console.log('id', req.params.id);
  let experienceId = parseInt(req.params.id);
  // console.log('type', typeof experienceId);
  db.getExperiences(experienceId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send({
        message: err.message
      });
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));

