var express = require('express');
var fs = require('fs');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    // var data = getImages(-1,12);
    var data = [];
    res.render('index', { title: '主页',image:data });
});







// router.get('/loadimage', function(req, res, next) {
//     var star = !!req.query["star"] ? req.query["star"] : -1;
//     var nub = !!req.query["nub"] ? req.query["nub"] : 5;
//     var data = getImages(star,nub);
//     res.end(JSON.stringify(data));

// });

// //查找图片数据 star为第一张要查找的图片，nub为要查找的张数，又id大的往小的查询；
// function getImages(star,nub) {
//     var number = 0;
//     var newDate = [];
//     number = !!nub ? nub : 12;
//     var data =fs.readFileSync('./models/databaseimages.jason'); //读取数据表中所有的image数据
//     //按照传入的参数提取所需要的data
//     (function(){
//         data = JSON.parse(data);
//         var imagesLen = 0;
//         for (k in data["images"]) {
//             imagesLen++;
//         }
//         star = (star== -1) ? imagesLen :star;
//         if (star <= number) {
//             for (var i=star-1;i>=0;i--) {
//                 newDate.push(data["images"]["img"+i]);
//             }
//         }else {
//             for (var i=star-1;i>star-number-1;i--) {
//                 newDate.push(data["images"]["img"+i]);

//             }
//         }
//     })();
//     return newDate;
// }
















module.exports = router;
