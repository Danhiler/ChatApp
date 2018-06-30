import db from '../db'
import User from "../models/User";

class userService {
    static deleteUser(id:string){

        return db.deleteElement('users',id);
    }
    static createUser({userName,password,age}) {
        const newUser = {...new User(userName,password,age)}
        return db.createElement('users',newUser)
    }
    static updateUser(updatedUser) {

        return db.updateElement('users',updatedUser)
    }

}

export default userService;