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
function messageSent(groupId, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        yield groupsModel_1.default.findOneAndUpdate({ _id: groupId }, { $push: { messageHistory: msg } });
        return yield groupsModel_1.default.find();
    });
}
exports.messageSent = messageSent;
;
//# sourceMappingURL=messageService.js.map