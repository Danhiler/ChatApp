import db from '../db'


class usersInGroupService {


    static updateUsersInGroup(groupId: string, usersIdArr: string) {
        return db.updateUsersInGroup(groupId,usersIdArr)
    }
}

export default usersInGroupService;