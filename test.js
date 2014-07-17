var geoip2 = require('./index');

geoip2.lookup('111.193.186.221', function(geo){
	console.log(geo);
});
