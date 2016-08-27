/**
 * Created by Jasonschen on 2016/8/19.
 */

var mongoose = require("mongoose");
var db = mongoose.createConnection("localhost","test");


db.on("error",console.error.bind(console,"连接错误:"));
db.on("open",function(){
    console.log("连接成功")
});

var imagesSchema = new mongoose.Schema({
    name: String,
    src: String
});

var imagesModel = db.model('image',imagesSchema);

var imagesEntity = new imagesModel({name:'马猴烧酒',src:'20.jpg'});

imagesModel.find(function(err,persons){
    console.log(persons);
});







