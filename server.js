var restler = require('restler');
var util = require('util');
restler.get('https://jeydeveloper.cloudant.com:443/_all_dbs', {
	username: 'jeydeveloper',
	password: 'okey19aja',
}).on('complete', function (data) {
	util.print(data);
});
