const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const { getAllStrings, saveNewString } = require('../../db/index');

// GET request controller
router.get('/',(req, res) => {
  getAllStrings()
    .then(results => {
      res.writeHead(200);
      res.end(JSON.stringify(results));
    })
    .catch(error => {
      res.writeHead(404);
      console.error(error);
      res.end('');
    })
});


// POST request controller
router.post('/',(req, res) => {
  saveNewString(req.body.newString)
    .then(results => {
      res.writeHead(200);
      res.end(JSON.stringify(results));
    })
    .catch(error => {
      res.writeHead(404);
      console.error(error);
      res.end('');
    })
});

module.exports = router;
