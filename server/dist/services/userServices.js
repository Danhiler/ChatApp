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
const usersModel_1 = require("../mongoServer/usersModel");
const User_1 = require("../models/User");
class userService {
    static deleteUser(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield usersModel_1.default.deleteOne({ _id: ID });
                return yield usersModel_1.default.find();
            }
            catch (err) {
                return err;
            }
        });
    }
    static createUser({ username, password, age }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield usersModel_1.default.create(Object.assign({}, new User_1.default(username, password, age)));
                return yield usersModel_1.default.find();
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    static updateUser({ _id, username, password, age }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield usersModel_1.default.findOneAndUpdate({ _id: _id }, { _id, username, password, age });
                return yield usersModel_1.default.find();
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.default = userService;
//# sourceMappingURL=userServices.js.map