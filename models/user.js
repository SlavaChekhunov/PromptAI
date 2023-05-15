import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    image: {
        type: String,
    }
})

//since this is not an express server (its not always on) we can check if theres models first and if its not there we create a new one.
const User = models.User || model('User', UserSchema);

export default User;