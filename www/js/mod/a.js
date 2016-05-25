define(["./b"],function (b) {
	console.info("a模块获取b模块exports.name："+b.name);
	return {
		"a_js":"a模块"
	}
});
