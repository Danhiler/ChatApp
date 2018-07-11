import * as Group from "./models/Group"
import Iuser from "./interfaces/iuser";
import Igroup from "./interfaces/igroup";

export interface AppState {
    loggedUser: Iuser | null,
    users:Iuser[],
    groups:Igroup | any,
    usersInGroups:any
}




export const appStore: AppState = {
    groups: new Group("global",null),
    loggedUser: null,
    users: [],
    usersInGroups:{},
};
