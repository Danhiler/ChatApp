///<reference path="models/Group.js"/>
import { applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
// import Iuser from "./interfaces/iuser";
// import * as Group from "./models/Group";
// import {appStore} from "./StateStore";
import {flatToHierarchy, getGroupById} from "./helpers";
//import AppState from "./interfaces/appstate";
import {Group} from "./models/Group"

function setData(state: any, {users,groups,usersInGroups}:any) {
    const groupsNested = flatToHierarchy(groups,usersInGroups,users);
    return {
        ... state,
        users,
        groups:groupsNested,
        usersInGroups
    }
}
function updateUsers(state: any, users:any) {
    return {
        ... state,
        users,
    }
}
function updateGroups(state:any,groupsArr:any){
    const groupsNested = flatToHierarchy(groupsArr,state.userInGroups,state.users)
    console.log("passit",groupsNested,getGroupById(groupsArr,state.selectedGroup._id))
    return {
        ...state,
            groups:groupsNested,
        selectedGroup:getGroupById(groupsArr,state.selectedGroup._id)
    }
}

function updateUsersInGroups(state: any, {groupsArr, usersInGroup}: any) {
    const groupsNested = flatToHierarchy(groupsArr,usersInGroup,state.users)
    return {
        ...state,
        groups:groupsNested,
        usersInGroups:usersInGroup
    }
}

function reducer(state:any,action:any){
    if(action.type == "GET_DATA") {
        return setData(state,action.data)
    }
    if(action.type == "UPDATE_USERS") {
        return updateUsers(state,action.data)
    }
    if(action.type == "UPDATE_GROUPS"){
        return updateGroups(state,action.data)
    }
    if(action.type == "UPDATE_USERSINGROUPS"){
        return updateUsersInGroups(state,action.data)
    }
    if(action.type == "UPDATE_CURRENT_GROUP"){
      return {...state,selectedGroup:action.data}
    }
    if(action.type == "USER_LOGIN"){
        return {...state,loggedUser:action.data}
    }


        return {
            ...state
        }

}
const mockGroup =new Group("global",null)
const initialState:any = {
    groups: mockGroup,
    loggedUser: null,
    users: [],
    usersInGroups:{},
    selectedGroup:mockGroup,

};

//
// interface AppStore {
//     dispatch: Dispatch<Action | any>;
//     getState(): AppState;
//     subscribe(listener: () => void): Unsubscribe;
// }

export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk));
