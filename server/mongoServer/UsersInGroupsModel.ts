import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserInGroupsSchema = new Schema({
    groupId: String,
    usersId: [String]
})

export default mongoose.model('UserInGroup',UserInGroupsSchema);