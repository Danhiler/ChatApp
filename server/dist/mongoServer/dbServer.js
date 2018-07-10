"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groupsModel_1 = require("./groupsModel");
class DB {
    constructor() {
        this.getData = () => {
            this.groupModel;
            //const {users,groups,usersInGroups} = db;
            //const data ={"users":users,"groups":groups,"usersInGroup":usersInGroups}
            //========================================================res.json(data)
        };
        this.deleteElement = (type, id) => {
            const elementIndex = this[type].findIndex((element) => element.id === id);
            this[type].splice(elementIndex, 1);
            return this[type];
        };
        this.groupModel = groupsModel_1.default;
    }
}
const db = new DB();
exports.default = db;
//# sourceMappingURL=dbServer.js.map