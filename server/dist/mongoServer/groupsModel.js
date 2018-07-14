"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GroupSchema = new Schema({
    name: String,
    parent: String,
    type: Number,
    userCount: Number,
    messageHistory: [{ time: String, content: String, user: String }],
    show: Boolean,
    id: String,
});
exports.default = mongoose.models.Group || mongoose.model('Group', GroupSchema);
//# sourceMappingURL=groupsModel.js.map