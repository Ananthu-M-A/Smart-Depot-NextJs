import connectDb from "@/lib/mongoose";
import Order from "@/models/order.model";

export async function GET() {
    connectDb();
    try {
        const orders = await Order.find();
        return new Response(JSON.stringify(orders), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch orders' }), { status: 500 });
    }
}
