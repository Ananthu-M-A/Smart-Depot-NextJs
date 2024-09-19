import { Types } from "mongoose";

interface IUser {
    name?: string;
    email: string;
    mobile?: string;
    password: string;
    shippingAddress?: Types.ObjectId;
    blocked?: boolean;
    offerApplied?: boolean;
    role: 'user' | 'admin';
    createdAt: Date;
}

export default IUser;