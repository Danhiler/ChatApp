"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const groupServices_1 = require("../services/groupServices");
const groupRouter = express_1.Router();
groupRouter.delete('/:groupId', (req, res) => {
    const deleteGroupId = req.params.groupId;
    const newGroupList = groupServices_1.default.deleteGroup(deleteGroupId);
    res.json(newGroupList);
});
groupRouter.post('/', (req, res) => {
    const { newGroupName, parentId } = req.body;
    const newGroupList = groupServices_1.default.createGroup(parentId, newGroupName);
    res.json(newGroupList);
});
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