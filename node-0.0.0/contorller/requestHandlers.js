/**
 * Created by Jasons on 2016/7/28.
 */
var fs = require('fs');
function start(response,setResponse) {
    fs.readFile('views/index.html',function(err,data) {
        var hand = '';
        var content = '';
        if(err) {
            hand = 404;
            content = '404 Not Found'
        }else {
            hand = 200;
            content = data.toString();
        }
        setResponse(response,hand,content);
    })
}
function upload(response,setResponse) {
    fs.readFile('',function(err,data) {
        var hand = '';
        var content = '';
        if(err) {
            hand = 404;
            content = '404 Not Found'
        }else {
            hand = 200;
            content = data.toString();
        }
        setResponse(response,hand,content);
    })
}
//function  favicon() {
//    return 'favicon';
//}
var obj = {};
obj['/'] = start;
obj['/start'] = start;
obj['/upload'] = upload;
//obj['/favicon.ico'] = favicon;


exports.obj = obj;