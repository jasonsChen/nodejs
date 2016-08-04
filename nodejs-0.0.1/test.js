/**
 * Created by Jason on 2016/8/3.
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
var aaa = 1;
fs.readFile(__dirname + '/models/user.jason',function (err,data) {
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    aaa++;
    //console.log(aaa)
})
console.log(aaa)
//function add() {
//
//    fs.readFile(__dirname + '/models/user.jason', function (err, data) {
//        data = JSON.parse(data);
//        data['user4'] = user['user'];
//        //console.log('hehe',user);
//        //console.log(data);
//    })
//}
//
//console.log(add());
//exports.add = add;