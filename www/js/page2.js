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
