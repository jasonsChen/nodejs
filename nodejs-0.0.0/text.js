/**
 * Created by Jasons on 2016/7/27.
 */
//var http = require('http');
//var url = require('url');
//    function onRequest(request,response) {
//        var pathname = url.parse(request.url).pathname
//        console.log(pathname)
//        var postData = "";
//        request.setEncoding("utf8");
//        request.addListener("data", function(postDataChunk) {
//            postData += postDataChunk;
//            console.log("Received POST data chunk '"+
//                postDataChunk + "'.");
//        });
//        request.addListener("end", function() {
//                response.writeHead(200, {'Content-Type':'text/html'});
//                response.write(postData);
//                response.end();
//        });
//    }
//    var server = http.createServer(onRequest).listen(8880);
var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

http.createServer(function(req, res) {
    console.log(req.url)
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });
        return;
    }
    // show a file upload form
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );
}).listen(8880);