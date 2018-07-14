import {ClientApi} from "../api/ClientApi";
import { getActionType} from "../helpers";


 class groupService  {

    static deleteGroup(id:string){
        return async(dispatch:any)=>{
            const arrGroupsList = await ClientApi.delete('/groups',id)
            dispatch(getActionType("UPDATE_GROUPS",arrGroupsList))
        }
    }

    static createGroup(parentId: string, newGroupName: string) {

        return async(dispatch:any)=>{
            const arrGroupsList = await ClientApi.post('/groups',{newGroupName, parentId})
            dispatch(getActionType("UPDATE_GROUPS",arrGroupsList))
        }
    }

    static updateUsersAtGroup(groupId: string, usersIdArr: string[]) {
        return async(dispatch:any)=>{
            const arrGroupsListAndUserInGroups = await ClientApi.put('/userInGroups',{groupId, usersIdArr})
            dispatch(getActionType("UPDATE_USERSINGROUPS",arrGroupsListAndUserInGroups))
        }
    }
}

export default groupService;