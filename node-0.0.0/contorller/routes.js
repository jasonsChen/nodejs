/**
 * Created by Jasons on 2016/7/27.
 */
var EventEmitter = require('events').EventEmitter;
var events = new EventEmitter();
function route(handler,pathname,response) {
    if (typeof handler[pathname] == 'function'){
        handler[pathname](response,setResponse);
    }else {
        var date = new Date();
        var time = date.toString().substr(15,9);
        console.log('没有找到请求for: ' + pathname + ' 时间为:' +time);
        setResponse(response,404,'404 Not For Found')
    }

}
function setResponse(response,hand,content) {
    response.writeHead(hand, {'Content-Type':'text/html'});
    response.write(content);
    response.end();
}
exports.route = route;

/*..............................................*/
