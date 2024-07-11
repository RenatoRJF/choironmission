import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "nl", "es", "pt"];
const defaultLocale = "en";

// Get the preferred locale
function getLocale(request: NextRequest) {
  const headers = request.headers.get("accept-language");

  if (headers) {
    const languages = new Negotiator({
      headers: { "accept-language": headers },
    }).languages();

    return match(languages, locales, defaultLocale);
  }

  return;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|images|icon).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
