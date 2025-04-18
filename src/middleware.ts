import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup';
    const token = request.cookies.get("token")?.value || "";

    if (path === "/" || path === "/contact") {
        return NextResponse.next(); // ✅ allow neutral paths to pass
    }

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next(); // ✅ ensure other allowed cases can continue
}

export const config = {
    matcher: [
        '/',
        '/dashboard',
        '/login',
        '/signup',
        '/contact',
    ]
}
