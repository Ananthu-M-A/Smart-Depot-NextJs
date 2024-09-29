import { ParamsInterface } from "@/interfaces/params.interface";
import connectDb from "@/lib/mongoose";
import Address from "@/models/address.model";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: ParamsInterface) {
    try {
        connectDb();
        const addresses = await Address.find({ userId: params.userId });
        return NextResponse.json(addresses, { status: 200 });
    } catch (error) {
        console.error('Error fetching addresses:', error);
        return NextResponse.json({ error: 'Failed to fetch addresses' }, { status: 500 });
    }
}
