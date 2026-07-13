import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'bn'];
const defaultLocale = 'en';

export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  let redirectNeeded = false;

  // 1. Trailing slash cleaning (e.g. /en/ -> /en, /en/about/ -> /en/about)
  let cleanPathname = pathname;
  if (pathname !== '/' && pathname.endsWith('/')) {
    cleanPathname = pathname.slice(0, -1);
    redirectNeeded = true;
  }

  // 2. Locale routing (e.g. / -> /en, /about -> /en/about)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !cleanPathname.startsWith(`/${locale}/`) && cleanPathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const localePrefix = `/${defaultLocale}`;
    const suffix = cleanPathname === '/' ? '' : cleanPathname;
    url.pathname = `${localePrefix}${suffix}`;
    redirectNeeded = true;
  } else {
    url.pathname = cleanPathname;
  }

  // If any redirect condition was met, return a permanent 308 redirect
  if (redirectNeeded) {
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring internal next assets, API routes, custom folder resources, and any path with a static file extension
  matcher: [
    '/((?!api|_next/static|_next/image|images|social-icons|[^?]*\\.(?:html|css|js(?!on)|jpe?g|webp|png|gif|svg|ico|woff2?|webmanifest|xml|txt)).*)'
  ],
};
