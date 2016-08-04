/**
 * Created by Jasons on 2016/7/27.
 */
var server = require('./contorller/server.js');
var routes = require('./contorller/routes.js');
var requestHandlers = require('./contorller/requestHandlers.js');
var handler = requestHandlers.obj;
server.start(routes.route,handler);
