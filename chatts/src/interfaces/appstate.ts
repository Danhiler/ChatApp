import Igroup from "./igroup";
import Iuser from "./iuser";

interface AppState {
    loggedUser: Iuser | null,
    users:Iuser[],
    groups:Igroup | any,
    usersInGroups:any
    selectedGroup:Igroup|null

    //addGroup2Group(newGroupName:string):void

}
export default AppState;