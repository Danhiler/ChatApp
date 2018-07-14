"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
//import * as socketIo from 'socket.io'
const io2 = require('socket.io')();
const messageService_1 = require("./services/messageService");
var mongoose = require('mongoose');
const router_1 = require("./router");
const server = http.createServer(router_1.default);
//const io = socketIo(http)
router_1.default.use(express.json());
mongoose.connect('mongodb://localhost:27017/ChatDB', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
io2.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('a user is disconnected');
    });
    socket.on('sendMessage', function (groupId, msg) {
        //io2.sockets.emit('updateClients',msg)
        //update db
        messageService_1.messageSent(groupId, msg).then((groups) => {
            io2.sockets.emit('updateClients', groups);
        });
    });
});
io2.listen(4001);
server.listen(4000, () => console.log("server is running on port 4000"));
//# sourceMappingURL=server.js.map