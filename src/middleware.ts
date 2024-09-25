import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function middleware(req: Request) {
    const cookieStore = cookies();
    const token = cookieStore.get('session');

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
        await jwtVerify(token.value, secret);
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/account/:path*",
        "/cart/userId",
        "/checkout/:id",
        "/wallet/:id",
        "/wishlist/:id"
    ],
};
