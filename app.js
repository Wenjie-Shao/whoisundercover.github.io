var express = require('express');
var path = require('path');
var compression = require('compression');
var logger = require('morgan');
var http = require('http');

var app = express();
/**
 * gzip compression
 */
app.use(compression())



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('',(req, res, next)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

var port = process.env.PORT || '4001';
app.set('port', port);

var server = http.createServer(app);

server.listen(port);