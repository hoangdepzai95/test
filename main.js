var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'staging.3dmaps.vn',
  user     : 'dbu_maapvn',
  password : 'maapvn',
  database : 'maap_production'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
