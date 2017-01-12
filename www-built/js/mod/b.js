define(function(require, exports, module) {
	console.info('b模块加载c模块');
	// 模块中继续加载模块
	var e = require('./c');
	console.log("b模块获取c模块 return的结果：",e);

	exports.name = "b模块exports.name的结果";

});
