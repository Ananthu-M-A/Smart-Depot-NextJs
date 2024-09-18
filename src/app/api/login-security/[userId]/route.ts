import { ParamsInterface } from "@/interfaces/params.interface";
import connectDb from "@/lib/mongoose";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: ParamsInterface) {
    try {
        connectDb();
        const user = await User.findOne({ _id: params.userId });
        // const user = await User.findOne({ _id: "66eaffe53bf342426229cf29" });
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
    }
}
