const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const { getAllStrings, saveNewString } = require('../../db/index');

// router.use((req, res, next) => {
//   console.log('Connection success');
//   next();
// })

router.get('/',(req, res) => {
  getAllStrings()
    .then(results => {
      res.writeHead(200);
      console.log(results);
      res.end(JSON.stringify(results));
    })
    .catch(error => {
      res.writeHead(404);
      console.error(error);
      res.end('');
    })
});


router.post('/strings/:string',(req, res) => {
  saveNewString(req.params.string)
    .then(results => {
      res.writeHead(200);
      console.log(results);
      res.json(results);
    })
    .catch(error => {
      res.writeHead(404);
      console.error(error);
      res.end('');
    })
});

module.exports = router;
