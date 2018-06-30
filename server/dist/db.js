"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class DB {
    constructor() {
        this.deleteElement = (type, id) => {
            const elementIndex = this[type].findIndex((element) => element.id === id);
            this[type].splice(elementIndex, 1);
            this.writeToJson(type);
            return this[type];
        };
        this.createElement = (type, newElement) => {
            this[type].push(newElement);
            this.writeToJson(type);
            return this[type];
        };
        this.updateElement = (type, updatedElement) => {
            const index = this[type].findIndex(element => element.id === updatedElement.id);
            this[type][index] = Object.assign({}, updatedElement);
            this.writeToJson(type);
            return this[type];
        };
        this.users = this.readFromJson('users.json');
        this.groups = this.readFromJson('groups.json');
        this.usersInGroups = this.readFromJson('usersInGroups.json');
    }
    readFromJson(fileName) {
        const data = fs.readFileSync(__dirname + '/data/' + fileName);
        return JSON.parse(data.toString());
    }
    writeToJson(fileName) {
        fs.writeFileSync(__dirname + '/data/' + fileName + ".json", JSON.stringify(this[fileName]));
    }
    updateUsersInGroup(groupId, usersIdArr) {
        this.usersInGroups[groupId] = usersIdArr;
        this.writeToJson("usersInGroups");
        return { usersInGroup: this.usersInGroups, groupsArr: this.groups };
    }
}
const db = new DB();
exports.default = db;
//# sourceMappingURL=db.js.map