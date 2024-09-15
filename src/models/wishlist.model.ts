import { model, Schema } from "mongoose";

const wishlistSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        }
    }],
})

const Wishlist = model('Wishlist', wishlistSchema);

export default Wishlist;