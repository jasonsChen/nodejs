var mongoose = require("mongoose");
var db = require("./mongodb").db;

var Schema = mongoose.Schema;
var articleSchema = new Schema({
	writer: String,
	name: String,
	content: String,
	image: [{
		image: String,
		link: String,
		create_data: { type: Date,default: Date.now }
	}]
});

var articleModel = db.model("article",articleSchema);
var articleDao = function () {
	// body...
}





module.exprots = new articleDao();

