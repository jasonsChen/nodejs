/**
 * Created by Jasons on 2016/7/27.
 */
function route(handler,pathname) {
    if (typeof handler[pathname] == 'function'){
        return handler[pathname]();
    }else {
        var date = new Date()
        var time = date.toString().substr(15,9)
        console.log('没有找到请求for: ' + pathname + ' 时间为:' +time)
        return '404 Not Found'
    }

}
exports.route = route;