(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ 0);\nvar http = __webpack_require__(/*! http */ 2);\nvar os = __webpack_require__(/*! os */ 3);\nvar yargs = __webpack_require__(/*! yargs */ 4);\nvar routes_1 = __webpack_require__(/*! ./routes */ 5);\nvar flags = yargs.argv;\nvar PORT = flags.port || 4000;\nvar app = express();\nvar server = http.createServer(app);\napp.use(express.static('dist'));\napp.use(routes_1.default);\nserver.listen(PORT, function () { return onStart(PORT); });\nfunction onStart(port) {\n    var localIp = getServerIp();\n    console.log(\"Server has been started on \\\"http://\" + getServerIp() + \":\" + port + \"\\\"\");\n}\nfunction getServerIp() {\n    var ifaces = os.networkInterfaces();\n    var values = Object.keys(ifaces).map(function (name) { return ifaces[name]; });\n    var ipv4 = (_a = Array.prototype).concat.apply(_a, values).filter(function (_a) {\n        var internal = _a.internal, family = _a.family;\n        return (internal === false && family === 'IPv4');\n    })[0];\n    return ipv4 ? ipv4.address : undefined;\n    var _a;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9zZXJ2ZXIudHM/YzAyMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIG9zIGZyb20gJ29zJztcbmNvbnN0IHlhcmdzID0gcmVxdWlyZSgneWFyZ3MnKTtcblxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmNvbnN0IGZsYWdzID0geWFyZ3MuYXJndjtcbmNvbnN0IFBPUlQgPSBmbGFncy5wb3J0IHx8IDQwMDA7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2Rpc3QnKSk7XG5hcHAudXNlKHJvdXRlcyk7XG5cbnNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4gb25TdGFydChQT1JUKSk7XG5cbmZ1bmN0aW9uIG9uU3RhcnQocG9ydCkge1xuXHRjb25zdCBsb2NhbElwID0gZ2V0U2VydmVySXAoKTtcbiAgICBjb25zb2xlLmxvZyhgU2VydmVyIGhhcyBiZWVuIHN0YXJ0ZWQgb24gXCJodHRwOi8vJHtnZXRTZXJ2ZXJJcCgpfToke3BvcnR9XCJgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VydmVySXAoKSB7XG4gICAgY29uc3QgaWZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3Qua2V5cyhpZmFjZXMpLm1hcCgobmFtZSkgPT4gaWZhY2VzW25hbWVdKTtcbiAgICBjb25zdCBpcHY0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi52YWx1ZXMpLmZpbHRlcigoe2ludGVybmFsLCBmYW1pbHl9KSA9PiAoaW50ZXJuYWwgPT09IGZhbHNlICYmIGZhbWlseSA9PT0gJ0lQdjQnKSlbMF07XG4gICAgcmV0dXJuIGlwdjQgPyBpcHY0LmFkZHJlc3MgOiB1bmRlZmluZWQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NlcnZlci50cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm9zXCI/NDliYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9zXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!************************!*\
  !*** external "yargs" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"yargs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInlhcmdzXCI/ZTBmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5YXJnc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInlhcmdzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************************!*\
  !*** ./server/routes/index.ts ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar path = __webpack_require__(/*! path */ 6);\nvar express_1 = __webpack_require__(/*! express */ 0);\nvar utils = __webpack_require__(/*! ../utils */ 7);\nvar routes = express_1.Router();\nroutes.use(utils.router.allowCrossDomain);\nroutes.get('/', function (req, resp, next) { return onLoadIndex(resp, next); });\nroutes.get('/test', function (req, resp, next) { return resp.send('Test page.'); });\nexports.default = routes;\nfunction onLoadIndex(resp, next) {\n    var filePath = path.resolve(__dirname, '../index.html');\n    resp.sendFile(filePath);\n}\n;\n\n/* WEBPACK VAR INJECTION */}.call(exports, \"server/routes\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvaW5kZXgudHM/OTNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHtFeHByZXNzLCBSb3V0ZXJ9IGZyb20gJ2V4cHJlc3MnO1xuXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmNvbnN0IHJvdXRlcyA9IFJvdXRlcigpO1xuXG5yb3V0ZXMudXNlKHV0aWxzLnJvdXRlci5hbGxvd0Nyb3NzRG9tYWluKTtcblxucm91dGVzLmdldCgnLycsIChyZXEsIHJlc3AsIG5leHQpID0+IG9uTG9hZEluZGV4KHJlc3AsIG5leHQpKTtcbnJvdXRlcy5nZXQoJy90ZXN0JywgKHJlcSwgcmVzcCwgbmV4dCkgPT4gcmVzcC5zZW5kKCdUZXN0IHBhZ2UuJykpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG5cbmZ1bmN0aW9uIG9uTG9hZEluZGV4KHJlc3AsIG5leHQpIHtcblx0Y29uc3QgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vaW5kZXguaHRtbCcpO1xuXHRyZXNwLnNlbmRGaWxlKGZpbGVQYXRoKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3JvdXRlcy9pbmRleC50cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*******************************!*\
  !*** ./server/utils/index.ts ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar router = {\n    allowCrossDomain: allowCrossDomain\n};\nexports.router = router;\nfunction allowCrossDomain(req, res, next) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');\n    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');\n    if (req.method === 'OPTIONS') {\n        res.send(200);\n    }\n    else {\n        next();\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci91dGlscy9pbmRleC50cz9iNDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVzcG9uc2UsIFJlcXVlc3R9IGZyb20gJ2V4cHJlc3MnO1xuXG5jb25zdCByb3V0ZXIgPSB7XG5cdGFsbG93Q3Jvc3NEb21haW5cbn07XG5cbmV4cG9ydCB7XG4gICAgcm91dGVyXG59XG5cbmZ1bmN0aW9uIGFsbG93Q3Jvc3NEb21haW4gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dCkge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsUFVULFBPU1QsREVMRVRFLE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZSwgQXV0aG9yaXphdGlvbiwgQ29udGVudC1MZW5ndGgsIFgtUmVxdWVzdGVkLVdpdGgnKTtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XG4gICAgICAgIHJlcy5zZW5kKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3V0aWxzL2luZGV4LnRzIl0sIm1hcHBpbmdzIjoiOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ])));