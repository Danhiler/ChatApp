import * as http from 'http';
import * as express from 'express';
//import * as socketIo from 'socket.io'
const io2 = require('socket.io')();

var mongoose = require('mongoose');

import router from './router';

const server = http.createServer(router);
//const io = socketIo(http)

router.use(express.json());

mongoose.connect('mongodb://localhost:27017/ChatDB', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB')
})

io2.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('a user is disconnected');
    });
})


//io2.listen(4001 );
server.listen(4010, ()=>console.log("server is running on port 4000"));