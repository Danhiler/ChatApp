"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//import * as routes from './routes';
const Cors = require("cors");
const db_1 = require("./db");
const userRouter_1 = require("./routes/userRouter");
const groupRouter_1 = require("./routes/groupRouter");
const usersInGroupRouter_1 = require("./routes/usersInGroupRouter");
const app = express();
app.use(Cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.use('/getData', (req, res) => {
    const { users, groups, usersInGroups } = db_1.default;
    const data = { "users": users, "groups": groups, "usersInGroup": usersInGroups };
    res.json(data);
});
app.use('/users', userRouter_1.default);
app.use('/groups', groupRouter_1.default);
app.use('/userInGroups', usersInGroupRouter_1.default);
exports.default = app;
//# sourceMappingURL=router.js.map