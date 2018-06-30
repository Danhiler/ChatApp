import db from '../db'
import {create} from "domain";
import Group from '../models/Group'

class groupService {
    static deleteGroup(ID:string){
        return db.deleteElement("groups",ID);
    }
    static createGroup(parentGroupId,newGroupName) {

        //if(db.groups.find) check if group name already exsist

        const newGroup = {...new Group(newGroupName,parentGroupId)}
        return db.createElement('groups',newGroup)
    }
    // static updateUser(updatedUser) {
    //     return db.updateElement('users',updatedUser)
    // }

}

export default groupService;