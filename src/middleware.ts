import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function middleware(req: Request) {
    const cookieStore = cookies();
    const token = cookieStore.get('session');

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        verify(token.value, process.env.JWT_SECRET as string);
    } catch (error) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/","/products"],
};
