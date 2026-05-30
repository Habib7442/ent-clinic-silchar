import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'bn'];
const defaultLocale = 'en';

export default function proxy(request: NextRequest) {
  const host = request.headers.get('host');
  const { pathname } = request.nextUrl;

  // 1. Redirect www to non-www permanently (prevents duplicate site indexing & authority dilution)
  if (host && host.startsWith('www.')) {
    const nonWwwHost = host.replace(/^www\./, '');
    const cleanPathname = pathname === '/' ? '' : pathname;
    
    // Determine the proper locale path to redirect to at the same time (single-hop redirect)
    const pathnameIsMissingLocale = locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );
    
    const targetPath = pathnameIsMissingLocale 
      ? `/${defaultLocale}${cleanPathname}` 
      : pathname;

    return NextResponse.redirect(
      new URL(`${targetPath}${request.nextUrl.search}`, `https://${nonWwwHost}`),
      308 // Permanent Redirect
    );
  }

  // 2. Redirect locale-less paths permanently (e.g. / -> /en, /about -> /en/about)
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
