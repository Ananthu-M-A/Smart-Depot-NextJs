import connectDb from "@/lib/mongoose";
import User from "@/models/user.model";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
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

        const token = jwt.sign({ user }, process.env.JWT_SECRET!, {
            expiresIn: "1h",
        });

        return NextResponse.json(
            { message: "Login Successful", token },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
