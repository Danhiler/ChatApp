"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName: String,
    password: String,
    age: Number,
});
const User = mongoose.model('User', userSchema);
exports.User = User;
console.log("User Model init");
//# sourceMappingURL=usersModel.js.map