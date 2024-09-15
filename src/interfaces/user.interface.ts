import { Types } from "mongoose";

interface IUser extends Document {
    name: string;
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