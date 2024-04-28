import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

type UserBody = {
  name: string
  avatar: string
}

type UserUpdate = {
  userId: string
  avatar: string
}

const prisma = new PrismaClient()

export async function GET(Request: NextRequest){
  try {
    const userId = Request.nextUrl.searchParams.get("userId");
  
    if(typeof(userId) === 'string'){
     const user = await prisma.user.findFirst({
        where: {
          id: userId
        }
      })
  
      return NextResponse.json({user})
    }
      const users = await prisma.user.findMany();
  
      return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({msg: error}, {status: 500})
  }

}
export  async function POST(Request: NextRequest){
  try {
    const {name, avatar}: UserBody = await Request.json();
  
    const user = prisma.user.create({
      data: {
        name,
        avatar
      }
    }
    )
  
    return NextResponse.json({msg: "Usuario cadastrado", userId: (await user).id});
  } catch (error) {
    return NextResponse.json({msg: error}, {status: 500})
  }
}

export  async function PUT(Request: NextRequest){
  try {
    const {userId, avatar}: UserUpdate = await Request.json();
  
    const deleteUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        avatar
      }
    })
  
    return NextResponse.json({msg: "Usuario editado com sucesso", userId: ( deleteUser).id});
  } catch (error) {
    return NextResponse.json({msg: error}, {status: 500});
  }
}