import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const cookieAuth = request.cookies.get('TOKEN')
  const response = NextResponse.next()

  if (!cookieAuth) return NextResponse.redirect(new URL('/login', request.url))
  return response
}

export const config = {
  matcher: '/',
}
