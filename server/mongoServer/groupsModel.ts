import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: String,
    parent: String,
    type: Number,
    userCount: Number,
    messageHistory: [{time:String,content:String,user:String}],
    show: Boolean,
    id: String,
})

export default mongoose.model('Group',GroupSchema);