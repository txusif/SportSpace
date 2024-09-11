import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from './utils/supabase/server'

// 1. Specify protected routes
const protectedRoutes = ['/account', '/account/profile', , '/account/bookings']

export async function middleware(req: NextRequest) {
    const supabase = createClient();

    // 2. Check if the current route is protected 
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)

    // 3. Decrypt the session
    const { data: { user }, error } = await supabase.auth.getUser();

    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !user) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return await updateSession(req)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}