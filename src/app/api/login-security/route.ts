import connectDb from "@/lib/mongoose";
import User from "@/models/user.model";

export async function GET() {
    connectDb();
    try {
        const user = await User.find();
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch user' }), { status: 500 });
    }
}
