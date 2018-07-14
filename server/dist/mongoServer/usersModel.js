"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    password: String,
    age: Number,
});
exports.default = mongoose.models.User || mongoose.model('User', userSchema);
//# sourceMappingURL=usersModel.js.map