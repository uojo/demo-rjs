// 加载a模块，a模块加载b ……
// 本模块写入了rjs配置的modules中，将会合并依赖的模块到本文件中
require(['./common'], function (common) {
	require(['../mod/a'], function (common) {
	  console.info("page3.js");
	});
});
define("../page3", function(){});

define('../mod/d',['require','exports','module'],function(require, exports, module) {

	// exports只是module.exports的引用
	module.exports = {"d_exports":"d.js"};
	// exports = {"hello":10};
	// console.log(arguments);

  console.log("d模块");
	// require("././req_app2/js/e");

});

define('../mod/c',['require','exports','module','./d'],function(require, exports, module) {
	console.info('c模块加载d模块');
	// 模块中继续加载模块
  var d = require('./d');
	console.info("c模块获取d模块 module.exports的结果：",d);

	return {"c_return":"c.js"};
});

define('../mod/b',['require','exports','module','./c'],function(require, exports, module) {
	console.info('b模块加载c模块');
	// 模块中继续加载模块
	var e = require('./c');
	console.log("b模块获取c模块 return的结果：",e);

	exports.name = "b模块exports.name的结果";

});

define('../mod/a',["./b"],function (b) {
	console.info("a模块获取b模块exports.name："+b.name);
	return {
		"a_js":"a模块"
	}
});

