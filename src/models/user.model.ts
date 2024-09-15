import { model, models, Schema } from 'mongoose';
import cartItemSchema from './cart.model';
import wishlistSchema from './wishlist.model';

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
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email'],
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
    },
    offerApplied: {
        type: Boolean,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    wishlist: [wishlistSchema],
    cart: [cartItemSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const User = model('User', userSchema);

export default User;