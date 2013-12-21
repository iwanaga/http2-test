var http2 = require('http2');
var url   = require('url');
var CONF  = require('./conf/conf.json');

var URL = CONF.Schema + '://' + CONF.Host + '/';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
http2.get(URL, function(res){

    console.log('== REQUEST ==');
    console.log(res);

    console.log('== RESPONSE ==')
    console.log(res.statusCode);
    console.log('----- header -----');
    console.log(res.headers);
    console.log('------------------');

    res.on('data', function(data){
        console.log(data.toString('utf8'));
    });
});

/*

var opt = url.parse(URL);
opt.plain = Boolean(process.env.HTTP2_PLAIN);
var req = http2.request(opt);
req.on('response', function(res){
    console.log(res.toString('utf8'));
});
req.on('push', function(pushReq){
    console.log();
});
req.end();
*/
