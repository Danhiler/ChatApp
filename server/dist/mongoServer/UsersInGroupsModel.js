"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserInGroupsSchema = new Schema({
    groupId: String,
    usersId: [String]
});
exports.default = mongoose.model('UserInGroup', UserInGroupsSchema);
//# sourceMappingURL=UsersInGroupsModel.js.map