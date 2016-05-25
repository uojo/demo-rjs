// common模块里包含了 requirejs.config 的内容，加载完成后，再使用 require 以及 define 时将会生效 config
requirejs(['./common'], function (common) {
    requirejs(['app/main1']);
});

define("../page1", function(){});

define('app/main1',['require'],function (require) {
	
    $(function () {
        console.log("page1.main1");
    });
});

