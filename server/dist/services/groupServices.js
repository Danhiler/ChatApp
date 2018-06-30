"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const Group_1 = require("../models/Group");
class groupService {
    static deleteGroup(ID) {
        return db_1.default.deleteElement("groups", ID);
    }
    static createGroup(parentGroupId, newGroupName) {
        //if(db.groups.find) check if group name already exsist
        const newGroup = Object.assign({}, new Group_1.default(newGroupName, parentGroupId));
        return db_1.default.createElement('groups', newGroup);
    }
}
exports.default = groupService;
//# sourceMappingURL=groupServices.js.map