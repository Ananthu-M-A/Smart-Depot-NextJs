import { model, models, Schema } from 'mongoose';
import IUser from '@/interfaces/user.interface';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
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
    shippingAddress: {
        type: Schema.Types.ObjectId,
        ref: 'Address',
    },
    blocked: {
        type: Boolean,
        required: true
    },
    offerApplied: {
        type: Boolean,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const User = models.User || model<IUser>('User', userSchema);

export default User;