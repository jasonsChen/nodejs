/**
 * Created by Jasons on 2016/7/28.
 */
function start() {
    console.log('start')
    return 'start'
}
function upload() {
    console.log('upload')
    return 'upload'
}
function  favicon() {
    return 'favicon';
}
var obj = {};
obj['/'] = start;
obj['/start'] = start;
obj['/upload'] = upload;
obj['/favicon.ico'] = favicon;


exports.obj = obj;