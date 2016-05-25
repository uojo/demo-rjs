define('mod/b',['require','exports','module','./c'],function(require, exports, module) {
	console.info('b模块加载c模块');
	// 模块中继续加载模块
	var e = require('./c');
	console.log("b模块获取c模块 return的结果：",e);

	exports.name = "b模块exports.name的结果";

});

define('mod/a',["./b"],function (b) {
	console.info("a模块获取b模块exports.name："+b.name);
	return {
		"a_js":"a模块"
	}
});

// 加载a模块，a模块加载b ……
// 本模块写入了rjs配置的modules中，将会合并依赖的模块到本文件中
require.config({
	baseUrl:"js/lib",
	paths: {
        mod: '../mod'
    }
});
require(['mod/a'], function (common) {
  console.info("page3.js");
});

define("../page4", function(){});

