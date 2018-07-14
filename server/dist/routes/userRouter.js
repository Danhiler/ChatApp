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
const express_1 = require("express");
const userServices_1 = require("../services/userServices");
const userRouter = express_1.Router();
userRouter.delete('/:userIndex', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const deleteUserIndex = req.params.userIndex;
    const newUserList = yield userServices_1.default.deleteUser(deleteUserIndex);
    res.json(newUserList);
}));
userRouter.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newUserList = yield userServices_1.default.createUser(req.body);
    res.json(newUserList);
}));
userRouter.put('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const newUserList = yield userServices_1.default.updateUser(req.body);
    res.json(newUserList);
}));
// If there are more than two arguments, the second argument will be
// counted as a middleware
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map