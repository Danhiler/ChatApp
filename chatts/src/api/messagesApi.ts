import * as openSocket from 'socket.io-client';
import Imessage from "../interfaces/Imessage";
//import {appService} from "../StateService";
//import {messageReceived} from "../redux-action";
import {getActionType} from "../helpers";
//import {appService} from "../StateService";
//import {flatToHierarchy} from "../helpers";
//import {appStore} from "../StateStore";
const socket = openSocket('http://localhost:4001');

function connectToChatRoom() {
    socket.on("updateClients", (groupsArr:any)=>{
       return (dispatch:any)=>{
            dispatch(getActionType("UPDATE_GROUPS",groupsArr))
        }
    })
}
function sendMessage(groupID:string, msg:Imessage){
    socket.emit('sendMessage', groupID,msg);
}
export { connectToChatRoom,sendMessage };