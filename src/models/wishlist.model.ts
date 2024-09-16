import IWishlist from "@/interfaces/wishlist.interface";
import { model, models, Schema } from "mongoose";

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

const Wishlist = models.Wishlist || model<IWishlist>('Wishlist', wishlistSchema);

export default Wishlist;