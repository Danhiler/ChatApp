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
const UsersInGroupsModel_1 = require("../mongoServer/UsersInGroupsModel");
class usersInGroupService {
    static updateUsersInGroup(groupId, usersIdArr) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = { upsert: true, new: true, setDefaultsOnInsert: true };
                yield UsersInGroupsModel_1.default.findOneAndUpdate({ groupId: groupId }, { usersId: usersIdArr }, options);
                return yield UsersInGroupsModel_1.default.find();
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.default = usersInGroupService;
//# sourceMappingURL=usersInGroupServices.js.map