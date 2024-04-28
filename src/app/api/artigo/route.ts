import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

type RequestBody = {
  image: string
  userId: string
  title: string
  text: string
}

export async function POST(request: NextRequest){
  try {
    const {image, userId, title, text}: RequestBody = await request.json();
    const post = await prisma.post.create({
       data: {
        image, 
        title,
        userId,
        text
       }
    })
    return NextResponse.json({msg: "Post realizado com sucesso"});
  } catch (error) {
    return NextResponse.json({error: error}, {status: 500})
  }
}

export async function GET(request: NextRequest){
  try {
    const id = request.nextUrl.searchParams.get("postId");
  
    if(typeof(id) === 'string'){
      const post = await prisma.post.findFirst({where: {
        id: id
      }})
  
      return NextResponse.json(post);
    }
  
    const posts = await prisma.post.findMany();
  
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({error: error}, {status: 500})
  }
}

export async function DELETE(request: NextRequest){
  try {
    const id = request.nextUrl.searchParams.get("postId");
  
    if(id){
      const post = await prisma.post.delete({where: {
        id
      }})
      return NextResponse.json({status: 200});
    }
    return NextResponse.json({error: "id é necessario"}, {status: 400})
  
  } catch (error) {
    return NextResponse.json({error: error}, {status: 500})
  }
}