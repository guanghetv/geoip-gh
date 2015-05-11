var _				=	require('underscore');
var geoip 	= require('geoip-lite');
var regions	= require('./libs/region_codes');


function ipToInt(ip) {
    var parts = ip.split(".");
    var res = 0;

    res += parseInt(parts[0], 10) << 24;
    res += parseInt(parts[1], 10) << 16;
    res += parseInt(parts[2], 10) << 8;
    res += parseInt(parts[3], 10);

    return res;
}

function intToIP(int) {
    var part1 = int & 255;
    var part2 = ((int >> 8) & 255);
    var part3 = ((int >> 16) & 255);
    var part4 = ((int >> 24) & 255);

    return part4 + "." + part3 + "." + part2 + "." + part1;
}

exports.lookup = function(ip, callback){
	var ipRegexp = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
	if(!ipRegexp.test(ip)) return callback(new Error('IP address is invalidate .', ip));
	var geo = geoip.lookup(ip);
	if(!geo){ //geoip not result for this ip.
		//local ipaddress
		var local_geo = {
			2130706433 : {
				country: 'local',
				region: 'local'
			}
		};
		geo = local_geo[ ipToInt(ip) ];
	}

	var region = _.find(regions, {
		country_code		: geo.country,
		subcountry_code	: geo.region
	});

	if(region){
		geo.region = region.region_name;
	}
	callback && callback(geo);
}
