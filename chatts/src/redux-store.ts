import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
// import Iuser from "./interfaces/iuser";
// import * as Group from "./models/Group";
// import {appStore} from "./StateStore";
import {flatToHierarchy} from "./helpers";

function getData(state: any, {users,groups,usersInGroups}:any) {
    const groupsNested = flatToHierarchy(groups,usersInGroups)
    return {
        ... state,
        users,
        groups:groupsNested,
        usersInGroups
    }
}

function reducer(state:any,action:any){
    if(action.type == "GET_DATA") {
        return getData(state,action.data)
    }
}
const initialState = {
    groups: {},
    loggedUser: {},
    users: {},
    usersInGroups:{},

};

export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk));
