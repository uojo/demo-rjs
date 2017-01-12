var requirejs = require('requirejs');

var config = {
    baseUrl: 'www/js',
    name: 'vendor',
    out: 'www-built/vendor.js',
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