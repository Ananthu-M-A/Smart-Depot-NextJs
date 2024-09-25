import connectDb from "@/lib/mongoose";
import User from "@/models/user.model";
import { NextResponse } from "next/server";
import { SignJWT } from 'jose';
import bcrypt from 'bcrypt';

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

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json(
                { error: "Invalid password. Please try again." },
                { status: 401 }
            );
        }

        const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
        const token = await new SignJWT({ user })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(secret);

        const response = NextResponse.json({ message: "Login Successful" }, { status: 200 });

        response.cookies.set('session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60,
            path: '/',
        });

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
