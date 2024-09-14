import { model, models, Schema } from 'mongoose';

const addressSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    addressType: {
        type: String,   // shipping or billing or both
        required: true,
    },
    recipientName: {
        type: String,
        required: true,
    },
    recipientMobile: {
        type: String,
        required: true,
    },
    house: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },

});

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
    shippingAddress: addressSchema,
    blocked: {
        type: Boolean,
    },
    offerApplied: {
        type: Boolean,
    },
});

const User = models.User || model('User', userSchema);

export default User;