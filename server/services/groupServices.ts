import GroupModel from "../mongoServer/groupsModel";

import Group from '../models/Group'

class groupService {

     static async deleteGroup(ID: string) {
        //return db.deleteElement("groups",ID);
        try {
             await GroupModel.deleteOne({_id: ID})
            return await GroupModel.find()
        }
        catch (err) {
            return err
        }
    }

    static async createGroup(parentGroupId, newGroupName) {
        //if(db.groups.find) check if group name already exsist
        try {
            await GroupModel.create({...new Group(newGroupName, parentGroupId)})
            return await GroupModel.find()
        }
        catch (err) {
            console.log(err)
            return err
        }
    }

// static updateUser(updatedUser) {
//     return db.updateElement('users',updatedUser)
// }

}

export default groupService;