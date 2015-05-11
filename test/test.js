var geoip2 = require('../');

geoip2.lookup(undefined, function(geo){
	console.log(geo);
});

geoip2.lookup(null, function(geo){
	console.log(geo);
});

geoip2.lookup(false, function(geo){
	console.log(geo);
});

geoip2.lookup('', function(geo){
	console.log(geo);
});


geoip2.lookup('127.0.0.1', function(geo){
	console.log(geo);
});


geoip2.lookup('114.114.114.114', function(geo){
	console.log(geo);
});

geoip2.lookup('8.8.8.8', function(geo){
	console.log(geo);
});
