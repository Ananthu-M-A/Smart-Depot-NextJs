import connectDb from "@/lib/mongoose";
import Address from "@/models/address.model";

export async function GET() {
    connectDb();
    try {
        const addresses = await Address.find();
        return new Response(JSON.stringify(addresses), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch addresses' }), { status: 500 });
    }
}
