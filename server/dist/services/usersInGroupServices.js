"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class usersInGroupService {
    static updateUsersInGroup(groupId, usersIdArr) {
        return db_1.default.updateUsersInGroup(groupId, usersIdArr);
    }
}
exports.default = usersInGroupService;
//# sourceMappingURL=usersInGroupServices.js.map