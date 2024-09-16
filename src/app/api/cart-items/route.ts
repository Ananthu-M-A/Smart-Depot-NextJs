import connectDb from "@/lib/mongoose";
import CartItem from "@/models/cart.model";

export async function GET() {
    connectDb();
    try {
        const cartItems = await CartItem.find();
        return new Response(JSON.stringify(cartItems), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch cart items' }), { status: 500 });
    }
}
