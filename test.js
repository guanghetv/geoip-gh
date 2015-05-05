var geoip2 = require('./index');

geoip2.lookup(undefined, function(geo){
	console.log(geo);
});
