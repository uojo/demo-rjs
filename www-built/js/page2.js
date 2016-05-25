define('mod/d',['require','exports','module'],function(require, exports, module) {

	// exports只是module.exports的引用
	module.exports = {"d_exports":"d.js"};
	// exports = {"hello":10};
	// console.log(arguments);

  console.log("d模块");
	// require("././req_app2/js/e");

});

define('mod/c',['require','exports','module','./d'],function(require, exports, module) {
	console.info('c模块加载d模块');
	// 模块中继续加载模块
  var d = require('./d');
	console.info("c模块获取d模块 module.exports的结果：",d);

	return {"c_return":"c.js"};
});

// 加载c模块，从模块加载d模块
// page2.js并未写入rjs配置中的modules中优化，所以在打包后只会压缩本文件，不会合并依赖的模块
require.config({
	baseUrl:"js/lib",
	paths: {
        mod: '../mod'
    }
});
require(['mod/c'], function () {
  console.log("page2.js");
  // require(["../app/main2"])
});

define("../page2", function(){});

