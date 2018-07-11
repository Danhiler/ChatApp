import UsersInGroups from '../mongoServer/UsersInGroupsModel'

class usersInGroupService {
    static async updateUsersInGroup(groupId: string, usersIdArr: string) {
        try {
            const options = { upsert: true, new: true, setDefaultsOnInsert: true }
            await UsersInGroups.findOneAndUpdate({groupId:groupId},{usersId:usersIdArr},options)
            return await UsersInGroups.find()
        }
        catch (err) {
            return err
        }

    }
}

export default usersInGroupService;