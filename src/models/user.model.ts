import { model, models, Schema } from 'mongoose';

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = models.User || model('User', userSchema);

export default User;