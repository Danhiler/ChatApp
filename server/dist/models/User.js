"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = require("uuid/v1");
class User {
    constructor(name, pass, userAge) {
        this.id = uuidv1();
        this.userName = name;
        this.password = pass;
        this.age = userAge;
    }
    updateUser(newPass, newAge) {
        this.password = newPass;
        this.age = newAge;
    }
    ;
}
exports.default = User;
//# sourceMappingURL=User.js.map