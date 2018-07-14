"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Group {
    constructor(groupName, parentID) {
        this.name = groupName;
        this.parent = "" + parentID;
        this.type = 0; //0 empty, 1 users, 2 groups
        this.userCount = 0;
        this.messageHistory = [];
        this.show = false;
        this.isRoot = false;
    }
}
exports.default = Group;
//# sourceMappingURL=Group.js.map