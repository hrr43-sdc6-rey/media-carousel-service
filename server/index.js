const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/:id', (req, res) => {
  db.getImages(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.sendStatus(400).send({
        message: err.message
      });
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));

