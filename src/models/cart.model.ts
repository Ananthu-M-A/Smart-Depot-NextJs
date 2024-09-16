import ICartItem from "@/interfaces/cart.interface";
import { model, models, Schema } from "mongoose";

const cartItemSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1,
        },
        price: {
            type: Number,
            required: true,
        }
    }]
})

const CartItem = models.CartItem || model<ICartItem>('CartItem', cartItemSchema);

export default CartItem;