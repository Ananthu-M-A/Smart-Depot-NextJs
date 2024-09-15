import { model, Schema } from "mongoose";

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

const Address = model('Address', addressSchema);

export default Address;