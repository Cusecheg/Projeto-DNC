import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const secret = process.env.jwt_secret;

export async function POST(req: NextRequest, res: NextResponse) {

  const {email, password} = await req.json();

  if(email != process.env.user_email || password != process.env.user_password){
    return NextResponse.json({msg: "Senha ou email invalidos"});
  }

  const token = jwt.sign({email, password}, secret);
  
  return NextResponse.json({token});

}