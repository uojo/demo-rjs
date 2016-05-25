// 加载a模块，a模块加载b ……
// 本模块写入了rjs配置的modules中，将会合并依赖的模块到本文件中
require(['./common'], function (common) {
	require(['../mod/a'], function (common) {
	  console.info("page3.js");
	});
});