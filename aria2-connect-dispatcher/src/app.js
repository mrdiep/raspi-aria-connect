import express from  'express';
import { Server } from 'http';
import socket from 'socket.io';

var app = express();
var server = Server(app);
var io = socket(server);

server.listen(8081);
console.log('listen on localhost:8081')
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('aria2', function ( {notification, params}) {
    console.log(notification, params);
  });
});