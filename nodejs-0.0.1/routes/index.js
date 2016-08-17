var express = require('express');
var fs = require('fs');
var url = require("url");
var qs = require("querystring");
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    //var url = url.parse(req.url).query;
    //var star = qs.parse(url)[star];
    //var nub = qs.parse(url)[nub];
    //var data = getImages(star,nub);
    //if(!url) {
    //    star = -1;
    //    nub = 12;
    //}
    var data = getImages(-1,12,res);

});


//查找图片数据
function getImages(star,nub,res) {
    var number = 0;
    var newDate = {};
    number = !!nub ? nub : 12;
    fs.readFile('./models/databaseimages.jason', function (err, data) {
        data = JSON.parse(data);
        var imagesLen = 0;
        for (k in data["images"]) {
            imagesLen++;
        }
        star = (star== -1) ? imagesLen :star;
        if (star <= number) {
            for (var i=star-1;i>=0;i--) {
                newDate["img"+i] = data["images"]["img"+i];
            }
        }else {
            for (var i=star-1;i>star-number-1;i--) {
                newDate["img"+i] = data["images"]["img"+i];
            }
        }
        res.render('index', { title: '主页',image:newDate });
    });
}















module.exports = router;
