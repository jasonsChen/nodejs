/**
 * Created by Jasons on 2016/7/27.
 */
var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('index.js')
readStream.setEncoding('UTF8');
readStream.on('data', function (str) {
    data += str;
})
readStream.on('end', function () {
    fs.writeFile('input.txt',data, function () {
        console.log('文件创建成功')
    })
})
readStream.on('error', function (err) {
    console.error(err)
})

