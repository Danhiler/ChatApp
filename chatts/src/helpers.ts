import Igroup from "./interfaces/igroup";
import {appService} from "./StateService";

export default function flatToHierarchy (flat:Array<Igroup>,usersInGroup:any) {
if (!flat)return {};
    const roots = {} // things without parent

    // make them accessible by guid on this map
    const all = {}

    for(let groupId in usersInGroup) {//Users in groups
        let group = appService.getGroupById(flat, groupId)
        for (let userId of usersInGroup[groupId]) {
            let user = appService.getUserById(userId)
            if(user && group) {
                if (!('childs' in group)) {
                    group.childs = {}
                }
                const userNode = {name: user.userName, type: 1}
                group.childs[user.userName] = userNode;
            }
        }
    }

    flat.forEach(function(item:Igroup) {
        all[item.id] = item
    })
    // connect children to its parent, and split roots apart
    Object.keys(all).forEach(function (id){
        let item = all[id];
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

