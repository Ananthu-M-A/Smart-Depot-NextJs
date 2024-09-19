import { Types } from "mongoose";

interface ICartItem {
    userId: Types.ObjectId;
    items: {
        productId: Types.ObjectId;
        quantity: number;
        price: number;
    }[];
}

export default ICartItem;