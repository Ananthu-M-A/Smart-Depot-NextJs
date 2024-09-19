import connectDb from "@/lib/mongoose";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        connectDb();

        const { email, password } = await req.json();
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { error: "Email not registered. Please check or register." },
                { status: 400 }
            );
        }

        if (user.password !== password) {
            return NextResponse.json(
                { error: "Invalid password. Please try again." },
                { status: 401 }
            );
        }

        const response = NextResponse.json(
            { message: "Login Successful" },
            { status: 200 }
        );
        response.cookies.set('token', user._id, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7
        })
        
        return response;

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
