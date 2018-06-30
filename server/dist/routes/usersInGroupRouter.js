"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersInGroupServices_1 = require("../services/usersInGroupServices");
const usersInGroupRouter = express_1.Router();
usersInGroupRouter.put('/', (req, res) => {
    const { groupId, usersIdArr } = req.body;
    const updatedUsersInGroupsAndGroupsArr = usersInGroupServices_1.default.updateUsersInGroup(groupId, usersIdArr);
    res.json(updatedUsersInGroupsAndGroupsArr);
});
// groupRouter.put('/', (req,res)=>{ //update existing User
//     const newUserList = userServices.updateUser(req.body)
//     res.json(newUserList)
// });
// If there are more than two arguments, the second argument will be
// counted as a middleware
exports.default = usersInGroupRouter;
//# sourceMappingURL=usersInGroupRouter.js.map