"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, pass, userAge) {
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