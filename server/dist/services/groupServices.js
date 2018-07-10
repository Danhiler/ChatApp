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
const groupsModel_1 = require("../mongoServer/groupsModel");
const Group_1 = require("../models/Group");
var mongoose = require('mongoose');
class groupService {
    static deleteGroup(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            //return db.deleteElement("groups",ID);
            try {
                yield groupsModel_1.default.deleteOne({ _id: ID });
                return yield groupsModel_1.default.find();
            }
            catch (err) {
                return err;
            }
        });
    }
    static createGroup(parentGroupId, newGroupName) {
        return __awaiter(this, void 0, void 0, function* () {
            //if(db.groups.find) check if group name already exsist
            try {
                yield groupsModel_1.default.create(Object.assign({}, new Group_1.default(newGroupName, parentGroupId)));
                return yield groupsModel_1.default.find();
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
}
exports.default = groupService;
//# sourceMappingURL=groupServices.js.map