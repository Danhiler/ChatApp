"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userServices_1 = require("../services/userServices");
const userRouter = express_1.Router();
userRouter.delete('/:userIndex', (req, res) => {
    const deleteUserIndex = req.params.userIndex;
    const newUserList = userServices_1.default.deleteUser(deleteUserIndex);
    res.json(newUserList);
});
userRouter.post('/', (req, res) => {
    // console.log(req.body)
    const newUserList = userServices_1.default.createUser(req.body);
    res.json(newUserList);
});
userRouter.put('/', (req, res) => {
    const newUserList = userServices_1.default.updateUser(req.body);
    res.json(newUserList);
});
// If there are more than two arguments, the second argument will be
// counted as a middleware
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map