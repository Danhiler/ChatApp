// import {appStore} from "./StateStore";
import {ClientApi} from "../api/ClientApi";
import {appService} from "../StateService";
import flatToHierarchy from "../helpers";
import {appStore} from "../StateStore";


export class groupService  {

    static async deleteGroup(id:string){

        const arrGroupsList = await ClientApi.delete('/groups',id)
        appService.updateGroupList(flatToHierarchy(arrGroupsList,appStore.usersInGroups))
    }

    static async createGroup(parentId: string, newGroupName: string) {
        const arrGroupsList = await ClientApi.post('/groups',{newGroupName, parentId})
        const groupsList = flatToHierarchy(arrGroupsList,appStore.usersInGroups)
        appService.updateGroupList(groupsList)
    }

    static async updateUsersAtGroup(groupId: string, usersIdArr: string[]) {
        const usersInGroupsAndGroupsArr = await ClientApi.put('/userInGroups',{groupId, usersIdArr})
        appService.updateUsersInGroup(usersInGroupsAndGroupsArr)
    }
}

export default groupService;