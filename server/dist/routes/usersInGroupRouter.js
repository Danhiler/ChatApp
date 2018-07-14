"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersInGroupServices_1 = require("../services/usersInGroupServices");
const GroupsModel_1 = require("../mongoServer/GroupsModel");
const usersInGroupRouter = express_1.Router();
usersInGroupRouter.put('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { groupId, usersIdArr } = req.body;
    const updatedUsersInGroupsArr = yield usersInGroupServices_1.default.updateUsersInGroup(groupId, usersIdArr);
    const updatedGroupsArr = yield GroupsModel_1.default.find();
    res.json({ usersInGroup: updatedUsersInGroupsArr, groupsArr: updatedGroupsArr });
}));
// groupRouter.put('/', (req,res)=>{ //update existing User
//     const newUserList = userServices.updateUser(req.body)
//     res.json(newUserList)
// });
// If there are more than two arguments, the second argument will be
// counted as a middleware
exports.default = usersInGroupRouter;
//# sourceMappingURL=usersInGroupRouter.js.map