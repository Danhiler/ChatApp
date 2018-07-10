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
const db_1 = require("../db");
const UsersModel_1 = require("../mongoServer/UsersModel");
class userService {
    static deleteUser(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            //return db.deleteElement("groups",ID);
            try {
                yield UsersModel_1.User.deleteOne({ _id: ID });
                return yield UsersModel_1.User.find();
            }
            catch (err) {
                return err;
            }
        });
    }
    //
    //
    // static async createUser({userName,password,age}) {
    //     try {
    //         await UserModel.create({...new User(userName,password,age)})
    //         return await UserModel.find()
    //     }
    //     catch (err) {
    //         console.log(err)
    //         return err
    //     }
    // }
    //
    // static deleteUser(id:string){
    //
    //     return db.deleteElement('users',id);
    // }
    // static createUser({userName,password,age}) {
    //     const newUser = {...new User(userName,password,age)}
    //     return db.createElement('users',newUser)
    // }
    static updateUser(updatedUser) {
        return db_1.default.updateElement('users', updatedUser);
    }
}
exports.default = userService;
//# sourceMappingURL=userServices.js.map