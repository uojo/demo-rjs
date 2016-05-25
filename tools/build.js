{
    appDir: '../www',
    mainConfigFile: '../www/js/common.js',
    dir: '../www-built',
    optimize:"none",
    modules: [
        //First set up the common build layer.
        // 简述：../common.js == 自己的内容＋include中的所有模块的内容
        {
            //module names are relative to baseUrl
            name: '../common',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery', 'app/auth' ]
        },

        //Now set up a build layer for each page, but exclude
        //the common one. "exclude" will exclude
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //"include" the appropriate "app/main*" module since by default
        //it will not get added to the build since it is loaded by a nested
        //requirejs in the page*.js files.
        {
            //module names are relative to baseUrl/paths config
            name: '../page1',
            include: ['app/main1'],
            exclude: ['../common']
        },
		{
            //module names are relative to baseUrl/paths config
            name: '../page2',
            // include: ['../app/main1']
        },
        {
            //module names are relative to baseUrl/paths config
            name: '../page3',
            include: ['../mod/a'],
            exclude: ['../common']
        },
        {
            //module names are relative to baseUrl/paths config
            name: '../page4',
            include: [],
            exclude: ["mod/c"]
        }

    ]
}
