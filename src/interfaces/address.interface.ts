import { Types } from "mongoose";

interface IAddress extends Document {
    userId: Types.ObjectId;
    addressType: string; // 'shipping', 'billing', or 'both'
    recipientName: string;
    recipientMobile: string;
    house: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export default IAddress;