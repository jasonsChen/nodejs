/**
 * Created by Jasons on 2016/7/27.
 */
var http = require('http');
var url = require('url');
function start(route,handler) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname
        route(handler,pathname,response);
    }
    var server = http.createServer(onRequest).listen(8888);
}
exports.start = start;