/**
 * Created by Jasons on 2016/7/27.
 */
var EventEmitter = require('events').EventEmitter;
var events = new EventEmitter();
function route(handler,pathname,response) {
    if (typeof handler[pathname] == 'function'){
        events.on('responceing', function (hand, content) {
            response.writeHead(hand, {'Content-Type':'text/html'});
            response.write(content);
            response.end();
            console.log('回调成功')
        })
        handler[pathname](events);
        console.log('开始回调');
    }else {
        var date = new Date();
        var time = date.toString().substr(15,9);
        console.log('没有找到请求for: ' + pathname + ' 时间为:' +time);
        response.writeHead(404, {'Content-Type':'text/html'});
        response.write('404 Not Found');
        response.end();
    }

}
exports.route = route;