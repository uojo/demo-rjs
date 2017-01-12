var requirejs = require('requirejs');

注意：baseUrl 路径是基于执行 node的目录的
var config = {
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

requirejs.optimize(config, function (buildResponse) {
    //buildResponse is just a text output of the modules
    //included. Load the built file for the contents.
    //Use config.out to get the optimized file contents.
	console.debug( "buildResponse" );
    
	var contents = fs.readFileSync(config.out, 'utf8');
	
	console.debug( "buildResponse >", contents );
	
}, function(err) {
	console.warn(err);
    //optimization err callback
});
