import db from '../db'
import User from "../models/User";
import UserModel from "../mongoServer/usersModel";

class userService {

    static async deleteUser(ID: string) {
        //return db.deleteElement("groups",ID);
        try {
            await UserModel.deleteOne({_id: ID})
            return await UserModel.find()
        }
        catch (err) {
            return err
        }

    }
    //
    //
    // static async createUser({userName,password,age}) {
    //     try {
    //         await UserModel.create({...new User(userName,password,age)})
    //         return await UserModel.find()
    //     }
    //     catch (err) {
    //         console.log(err)
    //         return err
    //     }
    // }
    //
    // static deleteUser(id:string){
    //
    //     return db.deleteElement('users',id);
    // }
    // static createUser({userName,password,age}) {
    //     const newUser = {...new User(userName,password,age)}
    //     return db.createElement('users',newUser)
    // }
    static updateUser(updatedUser) {

        return db.updateElement('users',updatedUser)
    }

}

export default userService;