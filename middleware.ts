import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname starts with a supported locale
  const pathnameIsMissingLocale = ['/en', '/fr'].every(
    locale => !pathname.startsWith(locale) && pathname !== locale
  );

  // Redirect if there is no locale in the pathname
  if (pathnameIsMissingLocale) {
    // Redirect to French by default (as per original config)
    return NextResponse.redirect(new URL(`/fr${pathname}`, request.url));
  }
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico|.*\\.svg$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$).*)']
};