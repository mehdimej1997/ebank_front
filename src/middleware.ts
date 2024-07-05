import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const authRoutes = ['/', '/sign-up'];

const paths = { CLIENT: 'operations', AGENT_GUICHET: 'users' };

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const isSessionExist = request.cookies.has('user-session');

  if (!isSessionExist && !pathname.match(/^(\/|\/sign-up)$/))
    return NextResponse.redirect(new URL(pathname, request.url));

  const userSession = request.cookies.get('user-session');

  const { status, role } =
    (JSON.parse(userSession!.value) as {
      status: string;
      role: keyof typeof paths;
    }) || {};

  console.log(paths?.[role]);

  if (authRoutes.includes(pathname) && isSessionExist)
    return NextResponse.redirect(
      new URL(`/${paths?.[role]}` || '/', request.url)
    );

  if (!!pathname.match(/^(?!\/$)(?!\/sign-up$).*/) && !isSessionExist)
    return NextResponse.redirect(new URL('/', request.url));

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
