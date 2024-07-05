import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const publicRoutes = ['/', '/sign-up'];

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const isSessionExist = request.cookies.has('user-session');

  if (publicRoutes.includes(pathname) && isSessionExist)
    return NextResponse.redirect(new URL('/dashboard', request.url));

  if (!!pathname.match(/^(?!\/$)(?!\/sign-up$).*/) && !isSessionExist)
    return NextResponse.redirect(new URL('/', request.url));

  if (!isSessionExist && !pathname.match(/^(\/|\/sign-up)$/))
    return NextResponse.redirect(new URL(pathname, request.url));

  const userSession = request.cookies.get('user-session');

  if (!userSession) return NextResponse.next();

  const { status } = JSON.parse(userSession!.value);

  if (status === 'ACTIVATION_PENDING' && !pathname.includes('reset'))
    return NextResponse.redirect(
      new URL(`/reset?email=${searchParams.get('email')}`, request.url)
    );

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
