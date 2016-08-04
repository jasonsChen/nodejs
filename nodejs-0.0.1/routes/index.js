var express = require('express');
var fs = require('fs');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST usr */
var user = {
  "user4" : {
    "name" : "mohit",
    "password" : "password4",
    "profession" : "teacher",
    "id": 4
  }
};
router.get('/adduser', function (req,res) {
  fs.readFile('./models/user.jason',function (err,data) {
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    console.log(data)
    res.render('userlist',{ title: 'Express',
      data
    });
  })
});
















module.exports = router;
