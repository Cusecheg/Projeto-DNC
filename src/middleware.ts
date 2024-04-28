import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'

const email = process.env.USER_EMAIL;
const jwtSecret: any = process.env.JWT_SECRET


 
export function handler(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  if(!token){
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const decodedToken: any = jwt.verify(token, jwtSecret);
  const emailDecodificado: any = decodedToken.email;

  if(email !== emailDecodificado){
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/artigo/:path*',
}