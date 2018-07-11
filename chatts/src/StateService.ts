import {appStore} from "./StateStore";
import Iuser from "./interfaces/iuser";
import {ClientApi} from "./api/ClientApi";
import Igroup from "./interfaces/igroup";
import {flatToHierarchy} from "./helpers";

export class AppService  {
    listeners: Function[];
    constructor(){
        this.listeners = [];
    }

    async getData(){
        const data = await ClientApi.getData()
        appStore.users = data.users
        appStore.groups = flatToHierarchy(data.groups,data.usersInGroup)
        this.updateUI();
    }
    updateUsersList(users:Iuser[]){
        appStore.users=users
        this.updateUI();
    }

    updateGroupList(groups:Igroup){
        appStore.groups=groups
        this.updateUI();
    }

    logIn(user:Iuser){
        appStore.loggedUser=user;
        this.updateUI();
    }

    subscribe(listener:Function){
        this.listeners.push(listener);
    }

    private updateUI(){
        for(const listener of this.listeners){
            listener();
        }
    }

    updateUsersInGroup({usersInGroup,groupsArr}:any) {
        appStore.groups= flatToHierarchy(groupsArr,usersInGroup)
        this.updateUI();
    }

}

export const appService: AppService = new AppService();