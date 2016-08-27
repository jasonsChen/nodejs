var mongoose = require('mongoose');    //引用mongoose模块
var db = mongoose.createConnection('localhost','nodejs'); //创建一个数据库连接

db.on('error',console.error.bind(console,'连接错误:')); // 还不太懂其原理

db.on('open',function () {
	console.log("mongodb连接成功!")
})














exports.db = db;