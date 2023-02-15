import { NextResponse } from "next/server";

export default function middleware(request) {
  const token = request.cookies.has("biofidelicXQuizAuth");
  if (token) {
    const url = request.nextUrl.clone();
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
    const regex = new RegExp(/\/[\S]{1,}\/[\S]{1,}\/[\S]{1,}\/[\S]{1,}/g);
    const quizPagePath = regex.test(url.pathname);
    if (quizPagePath) {
      url.pathname = "/sign-up";
      return NextResponse.redirect(url);
    }
    return NextResponse.rewrite(request.nextUrl);
  }
}

export const config = {
  matcher: ["/category/:path*/quiz/:path*", "/sign-up", "/log-in"],
};
