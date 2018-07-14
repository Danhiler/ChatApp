import Igroup from "./interfaces/igroup";
//import {appStore} from "./StateStore";
import Iuser from "./interfaces/iuser";

function flatToHierarchy (flat:Array<Igroup>,usersInGroup:any,users:Iuser[]) {
if (!flat)return {};
    const roots = {} // things without parent
    // make them accessible by guid on this map
    const all = {}

    for(let index in usersInGroup) {//Users in groups
        let group = getGroupById(flat, usersInGroup[index].groupId)
        for (const userId of usersInGroup[index].usersId) {

            let user = getUserById(userId,users)
            if(user && group) {
                if (!('childs' in group)) {
                    group.childs = {}
                }
                const userNode = {name: user.username, type: 1}
                group.childs[user.username] = userNode;
            }
        }
    }

    flat.forEach(function(item:Igroup) {
        all[item._id] = item
    })
    // connect children to its parent, and split roots apart
    Object.keys(all).forEach(function (_id){
        let item = all[_id];
        if (item.parent === null) {
            roots[item.name]= item
        } else if (item.parent in all) {//subgroups
            let p = all[item.parent]
            if (!('childs' in p)) {
                p.childs = {}
            }
            p.childs[item.name]=item;
            p.type = 2;
        }
    })
    // done!
    return roots["global"]


}
function getUserById(userId:string,users:Iuser[]){
    return users.find((user)=> user._id === userId)
}

function getGroupById(flatGroups:any, groupId:string){
    return flatGroups.find((group:any)=>group._id===groupId)

}
function getActionType(type: string, data: any) {
    return{
        type:type,
        data:data
    }
}
export {getUserById,getGroupById,flatToHierarchy,getActionType}

