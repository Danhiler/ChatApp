import * as mongoose from 'mongoose'

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    password: String,
    age: Number,
});

const User =  mongoose.model('User',userSchema);
console.log("User Model init")
export {User};