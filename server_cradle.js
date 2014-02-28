var cradle = require('cradle');
var db = new(cradle.Connection)('jeydeveloper.cloudant.com', 443, {
    secure: true,
    auth: { username: 'jeydeveloper', password: 'okey19aja' }
}).database('sample');

db.exists(function (err, exists) {
    if (err) {
        console.log('error', err);
    } else if (exists) {
        console.log('the force is with you.');
    } else {
        console.log('database does not exists.');
        db.create();
        /* populate design documents */
    }
});