import UserModel from "../mongoServer/usersModel";
import User from "../models/User";

class userService {
    static async deleteUser(ID: string) {
        try {
            await UserModel.deleteOne({_id: ID})
            return await UserModel.find()
        }
        catch (err) {
            return err
        }

    }

    static async createUser({username,password,age}) {
        try {
            await UserModel.create({...new User(username,password,age)})
            return await UserModel.find()
        }
        catch (err) {
            console.log(err)
            return err
        }
    }

   
    static async updateUser({_id,username,password,age}) {
        try {
            await UserModel.findOneAndUpdate({_id:_id},{_id,username,password,age})
            return await UserModel.find()
        }
        catch (err) {
            return err
        }
    }

}

export default userService;