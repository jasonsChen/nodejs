var mongoose = require('mongoose');
var db = require('./mongodb').db;

var Schema = mongoose.Schema;
var userSchema = new Schema({
	usrname: String,  //用户名
	password: String,//密码
	name: String,//昵称
	gender: { type:boolean,default:true }, //true：男，false：女。
	birthday：Date,
	address: String,
	cellphone: Number
})

var userModel = db.model('user',userSchema);
var userDao = function () {

}


module.exports = new userDao();



