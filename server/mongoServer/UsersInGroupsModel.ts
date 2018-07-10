import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserInGroupsSchema = new Schema({
    userID: [String]
})

export default mongoose.model('UserInGroup',UserInGroupsSchema);