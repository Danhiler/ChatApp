import * as fs from 'fs'
import Group from "./models/Group";



class DB {
    users;
    groups;
    usersInGroups: any;

    constructor() {
        this.users = this.readFromJson('users.json');
        this.groups = this.readFromJson('groups.json');
        this.usersInGroups = this.readFromJson('usersInGroups.json');


    }

    private readFromJson(fileName: string) {
        const data = fs.readFileSync(__dirname + '/data/' + fileName);
        return JSON.parse(data.toString());
    }

    writeToJson(fileName: string) {//user or group
        fs.writeFileSync(__dirname + '/data/' + fileName+".json",
            JSON.stringify(this[fileName]));
    }

    deleteElement = (type:string, id:string) => {
        const elementIndex=this[type].findIndex((element)=>element.id===id)
        this[type].splice(elementIndex,1);

        this.writeToJson(type);
        return this[type]

    };

    createElement = (type, newElement) => {
            this[type].push(newElement);
            this.writeToJson(type)
            return this[type]
    };

    updateElement = (type, updatedElement) => {
        const index = this[type].findIndex(element => element.id === updatedElement.id)
        this[type][index] = {...updatedElement};
        this.writeToJson(type)
        return this[type]
    }

    updateUsersInGroup(groupId: string, usersIdArr: string) {
        this.usersInGroups[groupId]=usersIdArr;
        this.writeToJson("usersInGroups")
        return {usersInGroup:this.usersInGroups,groupsArr:this.groups}
    }
}

const db = new DB()

export default db