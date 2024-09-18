import connectDb from "@/lib/mongoose";
import Order from "@/models/order.model";
import { ParamsInterface } from "@/interfaces/params.interface";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: ParamsInterface) {
    try {
        await connectDb();
        const orders = await Order.find({ userId: params.userId });
        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        console.error('Error fetching orders:', error);
        return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
}
