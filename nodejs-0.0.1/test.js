var fs = require("fs");
function getImages(star,nub) {
    var number = 0;
    var newDate = {};
    number = !!nub ? nub : 12;
    var data =fs.readFileSync('./models/databaseimages.jason');
    //处理成所需要的data
    (function(){
        data = JSON.parse(data);
        var imagesLen = 0;
        for (k in data["images"]) {
            imagesLen++;
        }
        star = (star== -1) ? imagesLen :star;
        if (star <= number) {
            for (var i=star-1;i>=0;i--) {
                newDate["img"+i] = data["images"]["img"+i];
            }
        }else {
            for (var i=star-1;i>star-number-1;i--) {
                newDate["img"+i] = data["images"]["img"+i];
            }
        }
    })()
    return newDate;
}

console.log(getImages(-1,12))