var express = require('express');

var app= express();

var server = app.listen(3000);

app.use(express.static('public'));

console.log("my server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    //console.log("new connection");
    console.log(socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse', data); //msg geht nicht an den client der gesendet hat
        //io.sockets.emit('mouse', data); //msg geht an alle clients
        //console.log(data);
    }
}