// import {appStore} from "./StateStore";
 import Iuser from "../interfaces/iuser";
 import {ClientApi} from "../api/ClientApi";
import {appService} from "../StateService";

export class userService  {

    static async deleteUser(id:string){
        const userList = await ClientApi.delete('/users',id)
        appService.updateUsersList(userList)
    }

    static async createUser(newUser:Iuser){
        const userList = await ClientApi.post('/users',newUser)
        appService.updateUsersList(userList)
    }
    static async updateUser(updatedUser:Iuser){
       const userList = await ClientApi.put('/users',updatedUser)
       appService.updateUsersList(userList)
    }
}
export default userService;