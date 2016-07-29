/**
 * Created by Jasons on 2016/7/27.
 */
var http = require('http');
var url = require('url');
function start(route,handler) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname
        response.writeHead(200, {'Content-Type':'text/html'});
        var content = route(handler,pathname);
        response.write(content);
        response.end();
    }
    var server = http.createServer(onRequest).listen(8888);
}
exports.start = start;