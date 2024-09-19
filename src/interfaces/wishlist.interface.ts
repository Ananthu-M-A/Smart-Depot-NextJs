import { Types } from "mongoose";

interface IWishlist {
    userId?: Types.ObjectId;
    products: {
        productId: Types.ObjectId;
    }[];
}

export default IWishlist;