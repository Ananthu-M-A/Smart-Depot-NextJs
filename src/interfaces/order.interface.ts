import { Types } from "mongoose";

interface IOrder {
    _id: string;
    userId: Types.ObjectId;
    orderItems: {
        productId: Types.ObjectId;
        quantity: number;
    }[];
    shippingAddress: Types.ObjectId;
    paymentMethod: string;
    paymentResult?: {
        status?: string;
        update_time?: string;
        email_address?: string;
    };
    totalPrice: number;
    isPaid: boolean;
    paidAt?: Date;
    isDelivered: boolean;
    deliveredAt?: Date;
    createdAt: Date;
}

export default IOrder;