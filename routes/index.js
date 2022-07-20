var express = require('express');
var router = express.Router();

let data = {
  eage: "salom",
  name: "Tempiltin"
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index",{
    layout: 'main',
    title:"api"
  })
  console.log(window.location.pathname)
});

module.exports = router;
