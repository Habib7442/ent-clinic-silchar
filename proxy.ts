import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'bn'];
const defaultLocale = 'en';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, `/images/`, `/social-icons/`, `/sitemap.xml`, `/robots.txt`, `/favicon.ico`, `/favicon.svg`, `/favicon-dark.svg`, `/site.webmanifest`, and `/og-image.jpg`
  matcher: [
    '/((?!api|_next/static|_next/image|images|social-icons|sitemap\\.xml|robots\\.txt|favicon\\.ico|favicon\\.svg|favicon-dark\\.svg|site\\.webmanifest|og-image\\.jpg).*)'
  ],
};
