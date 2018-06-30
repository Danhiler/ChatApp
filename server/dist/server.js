"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
//import * as socketIo from 'socket.io'
const io2 = require('socket.io')();
const router_1 = require("./router");
const server = http.createServer(router_1.default);
//const io = socketIo(http)
router_1.default.use(express.json());
io2.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('a user is disconnected');
    });
});
io2.listen(4001);
server.listen(4000, () => console.log("server is running on port 4000"));
//# sourceMappingURL=server.js.map