import {ClientApi} from "./api/ClientApi";
import {getActionType} from "./helpers";
import Igroup from "./interfaces/igroup";
import Iuser from "./interfaces/iuser";


export function getData() {
    return async (dispatch: any) => {
        const data = await ClientApi.getData();
        dispatch(getActionType("GET_DATA", data))
    }
}

export function updateMessageHistory(groupsArr: Igroup[]) {
    return (dispatch: any) => {
        dispatch(getActionType("UPDATE_GROUPS", groupsArr))
    }
}

export function updateCurrentGroup(group: Igroup) {
    return (dispatch: any) => {
        dispatch(getActionType("UPDATE_CURRENT_GROUP", group))
    }
}
export function userLogin(user: Iuser) {
    return (dispatch: any) => {
        dispatch(getActionType("USER_LOGIN", user))
    }
}



