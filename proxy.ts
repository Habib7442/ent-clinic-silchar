import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'bn'];
const defaultLocale = 'en';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect locale-less paths permanently (e.g. / -> /en, /about -> /en/about)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const cleanPathname = pathname === '/' ? '' : pathname;
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${cleanPathname}${request.nextUrl.search}`, request.url),
      308 // Permanent Redirect for SEO
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, `/images/`, `/social-icons/`, `/sitemap.xml`, `/robots.txt`, `/favicon.ico`, `/favicon.svg`, `/favicon-dark.svg`, `/site.webmanifest`, and `/og-image.jpg`
  matcher: [
    '/((?!api|_next/static|_next/image|images|social-icons|sitemap\\.xml|robots\\.txt|favicon\\.ico|favicon\\.svg|favicon-dark\\.svg|site\\.webmanifest|og-image\\.jpg).*)'
  ],
};
