var express = require('express');
var router = express.Router();

let data = {
  eage: "salom",
  name: "Tempiltin"
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({
    eage: "salom",
    name: "Tempiltin"
  })
  console.log(window.location.pathname)
});

module.exports = router;
