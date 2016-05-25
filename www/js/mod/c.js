define(function(require, exports, module) {
	console.info('c模块加载d模块');
	// 模块中继续加载模块
  var d = require('./d');
	console.info("c模块获取d模块 module.exports的结果：",d);

	return {"c_return":"c.js"};
});
