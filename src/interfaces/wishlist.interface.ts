import { Types } from "mongoose";

interface IWishlist extends Document {
    userId?: Types.ObjectId;
    products: {
        productId: Types.ObjectId;
    }[];
}

export default IWishlist;