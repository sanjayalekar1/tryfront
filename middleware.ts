
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

   const authToken =  request.cookies.get('auth-token')?.value;
   const loggedInUserNotAccessPath = request.nextUrl.pathname === '/auth' ||
   request.nextUrl.pathname === '/signup' ;

   if(loggedInUserNotAccessPath) {
        if(authToken) {
            return NextResponse.redirect(new URL('/dashboard',request.url));
        }
   }else {
    if(!authToken){
        return NextResponse.redirect(new URL('/auth',request.url));
    }
   }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*","/auth","/signup","/api/:path*"]
}