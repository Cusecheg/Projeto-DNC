import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import cloudinary from "cloudinary";


const prisma = new PrismaClient();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
});


// export async function GET(request: NextRequest) {
//   try {
//     const id = request.nextUrl.searchParams.get("postId");

//     if (typeof id === "string") {
//       const post = await prisma.post.findFirst({
//         where: {
//           id: id,
//         },
//       });

//       return NextResponse.json(post);
//     }

//     const posts = await prisma.post.findMany();

//     return NextResponse.json(posts);
//   } catch (error) {
//     return NextResponse.json({ error: error }, { status: 500 });
//   }
// }

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file = data.get("image") as File;

    if (!file || !(file instanceof File)) {
      throw new Error("Nenhum arquivo escolhido!");
    }

    const bytes = await file.arrayBuffer();
    const base64String = Buffer.from(bytes).toString("base64")
   
    
    const result = await cloudinary.v2.uploader.upload(`data:${file.type};base64,${base64String}`, {
      folder: 'uploads',
      allowed_formats: ['jpg', 'jpeg', 'png'],
      transformation: {
        width: 800,
        height: 400,
        crop: 'limit'
      }
    });

    const image = result.secure_url; 
    const authorId = data.get("authorId");
    const datePublication = data.get("datePublication");
    const title = data.get("title");
    const text = data.get("text");
   

    await prisma.post.create({
      data: {
        image: image as string,
        authorId: authorId as string,
        datePublication: datePublication as string,
        title: title as string,
        text: text as string,
      },
    });

    return NextResponse.json({ msg: "Post realizado com sucesso!", authorId: authorId });
  } catch (error: any) {
    return NextResponse.json(
      {
        msg: "Erro ao salvar o post",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("postId");

    if (id) {
      await prisma.post.delete({
        where: {
          id,
        },
      });
      return NextResponse.json({ status: 200 });
    }
    return NextResponse.json({ error: "id é necessario" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
