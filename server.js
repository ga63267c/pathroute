//  OpenShift sample Node application
var express = require('express'),
    app     = express();
var os = require('os');


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
    res.send('path of /Curam or /CuramStatic is needed');
});

app.get('/Curam', function (req, res) {
    res.send('{ path:Curam, serverName:'+os.hostname()+';}');
});

app.get('/CuramStatic', function (req, res) {
    res.send('{ path:CuramStatic, serverName:'+os.hostname()+';}');
});


// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
