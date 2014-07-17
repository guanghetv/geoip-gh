# geoip-local

geoip  tools for nodejs .

[![NPM](https://nodei.co/npm/geoip-local.png?downloads=true&stars=true)](https://nodei.co/npm/geoip-local/)


## installation

	npm install geoip-local

## usage

	var geoip = require('geoip-local');

	geoip.lookup('111.193.186.221', function(geo){
		console.log(geo);
	});

## licence

[MIT](http://lsong.mit-license.org/)
