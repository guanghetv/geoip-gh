var geoip = require('geoip-lite');
var regions = require('./libs/region_codes');

var findByRegionCode = function(country,code){
	for(var i in regions){
		var region = regions[i];
		if(region['country_code'] == country && region['subcountry_code'] == code){
			return region['region_name'];
		}
	}
};
exports.lookup = function(ip, callback){
	var geo = geoip.lookup(ip);
	var country = geo['country'];
	var region = geo['region'];
	geo['region'] = findByRegionCode(country,region) || region;
	callback && callback(geo);
}
