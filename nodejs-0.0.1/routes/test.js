/**
 * Created by Administrator on 2016/8/3.
 */


var fs = require('fs');
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}
fs.readFile('../models/user.jason',function (err,data) {
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    console.log(data);
})
console.log()