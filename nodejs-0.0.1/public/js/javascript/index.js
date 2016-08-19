window.onload =function (){
    waterFull();
    $(window).resize(function () {
        waterFull();
        if ($(document).height() - $(window).scrollTop() == $(window).height()) {
            getImgs(5);
        }
    });
    $(window).scroll(function() {
        if ($(document).height() - $(window).scrollTop() == $(window).height()) {
            getImgs(5);
        }
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

    //图片加载完成之后缓存5个image对象
    var getImgs = (function(){
        var oImgs=null;
        var indexStar = 0; //当前网页最后一张图片的id
        var $content = $(".content"),
            $box = $content.find(".box");
        indexStar = $($box[$box.length-1]).find("img").attr("id");
        loadimage();
        function loadimage(len) {
            //请求5张图片
            len = !!len ? len : 5;
            $.get('/loadimage?star='+indexStar+'&nub=' + len,function(data) {
                //  收到请求后的图片data，然后修改当前页面的最后一张图片id，以及用新的img对象替换上次缓存的img；
                oImgs = [];
                for (var i=0;i<data.length;i++) {
                    oImgs[i] = data[i];
                    oImgs[i]["img"] = new Image();
                    oImgs[i]["img"].src = "images/" + data[i]["src"];
                }
                indexStar = indexStar >= len ? indexStar-len : 0;
            },"json")
        }
        return function (len) {
            // 将缓存好的img对象插入到dom中并执行定位函数
                 $box = $content.find(".box").eq(0);
                $(oImgs).each(function(i,o) {
                    var $obj = $box.clone(true).find("img").attr({
                        id: oImgs[i]["id"],
                        src: oImgs[i]["img"]["src"]
                    }).end();
                    $obj.find("h4").eq(0).text(oImgs[i]["name"]);
                    $obj.find("h4").eq(1).text(oImgs[i]["id"]);
                    $content.append($obj);
                });
            waterFull();
            loadimage(len);
        };
    })();







}
