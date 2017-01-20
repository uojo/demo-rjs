var requirejs = require('requirejs');
var fs = require('fs');
var program = require('commander');

	program
	  .option('-c, --rjs [name]', '打包模块的名称')
	  .parse(process.argv);


// 注意：baseUrl 路径是基于执行 node的目录的
var cfg_default = {
    baseUrl: 'www/js',
    name: 'vendor',
    out: 'www-built/vendor.js',
	optimize:"none",
	paths:{
		"jquery":"lib/jquery"
	},
	shim:{
		
	}
};

var pack = function(cfg,cb){
	
	var config = Object.assign({},cfg_default,cfg);
	
	requirejs.optimize(config, function (buildResponse) {
		// buildResponse is just a text output of the modules
		// included. Load the built file for the contents.
		// Use config.out to get the optimized file contents.
		// console.log( "buildResponse" );
		
		// var contents = fs.readFileSync(config.out, 'utf8');
		// console.log( "buildResponse >", contents.length );
		
		cb && cb();
		
	}, function(err) {
		console.log(err);
		// optimization err callback
	});
}


// console.log("rjs.name : %s",program.rjs);
if(program.rjs){
	// console.log("rjs.pack",program.rjs);
	var pNames = ["vendor","tmod1"]
	if( pNames.includes(program.rjs) ){
		var tcfg = {
			"name":program.rjs,
			"out":"www-built/"+program.rjs+".js"
		};
		pack(tcfg);
	}else{
		console.log("error.可选值：%s",pNames.join(", ") );
		
	}
	
}


module.exports = {"pack":pack};