import { NextResponse } from "next/server";

export default function middleware(request) {
  const token = request.cookies.has("biofidelicXQuizAuth");
  if (token) {
    console.log(token);
    const url = request.nextUrl.clone();
    console.log(url.pathname);
    if (url.pathname === "/log-in") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    } else if (url.pathname === "/sign-up") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    } else {
      return NextResponse.rewrite(request.nextUrl);
    }
  } else {
    const url = request.nextUrl.clone();
    url.pathname = "/sign-up";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/category/:path*/quiz/:path*", "/sign-up", "/log-in"],
};