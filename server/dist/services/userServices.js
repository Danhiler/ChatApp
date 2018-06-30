"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const User_1 = require("../models/User");
class userService {
    static deleteUser(id) {
        return db_1.default.deleteElement('users', id);
    }
    static createUser({ userName, password, age }) {
        const newUser = Object.assign({}, new User_1.default(userName, password, age));
        return db_1.default.createElement('users', newUser);
    }
    static updateUser(updatedUser) {
        return db_1.default.updateElement('users', updatedUser);
    }
}
exports.default = userService;
//# sourceMappingURL=userServices.js.map