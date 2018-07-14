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
const groupServices_1 = require("../services/groupServices");
const groupRouter = express_1.Router();
groupRouter.delete('/:groupId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const deleteGroupId = req.params.groupId;
    const newGroupList = yield groupServices_1.default.deleteGroup(deleteGroupId);
    res.json(newGroupList);
}));
groupRouter.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { newGroupName, parentId } = req.body;
    if (+parentId === 0) {
        parentId = "5b487b4a448bcd338c859dd7";
    }
    const newGroupList = yield groupServices_1.default.createGroup(parentId, newGroupName);
    res.json(newGroupList);
}));
// groupRouter.put('/', (req,res)=>{ //update existing User
//     const newUserList = userServices.updateUser(req.body)
//     res.json(newUserList)
// });
// If there are more than two arguments, the second argument will be
// counted as a middleware
function flatToHierarchy(flat) {
    const roots = {}; // things without parent
    // make them accessible by guid on this map
    const all = {};
    flat.forEach(function (item) {
        all[item.id] = item;
    });
    // connect childrens to its parent, and split roots apart
    Object.keys(all).forEach(function (id) {
        let item = all[id];
        if (item.parent === null) {
            roots[item.name] = item;
        }
        else if (item.parent in all) {
            let p = all[item.parent];
            if (!('childs' in p)) {
                p.childs = {};
            }
            p.childs[item.name] = item;
        }
    });
    // done!
    return roots["global"];
}
exports.default = groupRouter;
//# sourceMappingURL=groupRouter.js.map