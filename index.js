/**
 * Created by Jasons on 2016/7/27.
 */
var server = require('./server.js');
var routes = require('./routes.js');
var requestHandlers = require('./requestHandlers.js');
var handler = requestHandlers.obj;
server.start(routes.route,handler);
