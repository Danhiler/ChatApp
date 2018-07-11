import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    age: Number,
});

export default mongoose.models.User || mongoose.model('User', userSchema);