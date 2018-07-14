"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//import * as routes from './routes';
const Cors = require("cors");
const userRouter_1 = require("./routes/userRouter");
const groupRouter_1 = require("./routes/groupRouter");
const usersInGroupRouter_1 = require("./routes/usersInGroupRouter");
const groupsModel_1 = require("./mongoServer/groupsModel");
const UsersModel_1 = require("./mongoServer/UsersModel");
const UsersInGroupsModel_1 = require("./mongoServer/UsersInGroupsModel");
const app = express();
app.use(Cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.use('/getData', (req, res) => {
    Promise.all([UsersModel_1.default.find(), groupsModel_1.default.find(), UsersInGroupsModel_1.default.find()])
        .then(([users, groups, usersInGroups]) => {
        const data = { "users": users, "groups": groups, "usersInGroups": usersInGroups };
        res.json(data);
    });
});
app.use('/users', userRouter_1.default);
app.use('/groups', groupRouter_1.default);
app.use('/userInGroups', usersInGroupRouter_1.default);
exports.default = app;
//# sourceMappingURL=router.js.map