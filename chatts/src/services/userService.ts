
 import Iuser from "../interfaces/iuser";
 import {ClientApi} from "../api/ClientApi";
import {getActionType} from "../helpers";

 class userService  {

    static deleteUser(id:string){
        return async(dispatch:any)=>{
            const userList = await ClientApi.delete('/users',id)
            dispatch(getActionType("UPDATE_USERS",userList))
        }
    }

    static createUser(newUser:Iuser){
        return async(dispatch:any)=>{
            const userList = await ClientApi.post('/users',newUser)
            dispatch(getActionType("UPDATE_USERS",userList))
        }
    }
    static updateUser(updatedUser:Iuser){
        return async(dispatch:any)=>{
            const userList = await ClientApi.put('/users',updatedUser)
            dispatch(getActionType("UPDATE_USERS",userList))
        }
    }
}


export default userService;