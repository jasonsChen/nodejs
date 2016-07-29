/**
 * Created by Jasons on 2016/7/28.
 */
function start(events) {
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
        events.emit('responceing',hand,content);
    })
}
function upload() {
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
        events.emit('responceing',hand,content);
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