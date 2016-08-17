window.onload =function (){
    waterFull();
    $(window).resize(function () {
        waterFull();
    });
    function waterFull() { // 瀑布流盒子定位
        //求出列数line
        var line = 0;
        var lineW = 0;
        var $content = $(".content"),
            contentW = $content.width();
        var $boxs = $content.find(".box"),
            boxW = $boxs.width();
        line = Math.floor(contentW/boxW);
        lineW = 1/line;
        //对box进行瀑布流定位
        var arr = [];
        $boxs.each(function (index,box) {
            $box = $(box);
            if (index < line) {
                var boxH = $box.outerHeight(true);
                $box.removeClass("absolute");
                $box.css({
                    top: 0,
                    left: 0
                });
                arr.push(boxH);
            }else {
                //找到高度最低的列和她的高度
                var minH =Math.min.apply(true,arr);
                var minHIndex ="";
                $(arr).each(function (index,value) {
                    if (value == minH) {
                        minHIndex = index;
                        return false;
                    }
                });

                //将box定位到上面找到的位置
                $box.addClass("absolute")
                    .css({
                        top:Math.floor(minH),
                        left: minHIndex*lineW*100 + "%"
                    });
                arr[minHIndex] += $box.outerHeight();
            }
        });

    }












}
