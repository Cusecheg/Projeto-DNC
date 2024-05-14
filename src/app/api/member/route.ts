import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";


const prisma = new PrismaClient();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
});



// export async function GET() {
//   try {
//     const allMembers = await prisma.member.findMany();

//     return NextResponse.json(allMembers);
//   } catch (error) {
//     return NextResponse.json({
//       msg: error,
//       status: 500,
//       error: error,
//     });
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
        width: 500,
        height: 500,
        crop: 'limit'
      }
    });

    const id = data.get("id");
    const name = data.get("name");
    const profession = data.get("profession");
    const location = data.get("location");
    const email = data.get("email");
    const linkedin = data.get("linkedin");
    const image = result.secure_url; 

    await prisma.member.create({
      data: {
        name: name as string,
        profession: profession as string,
        location: location as string,
        email: email as string,
        linkedin: linkedin as string,
        image: image as string,
      },
    });

    return NextResponse.json({ msg: "Membro adicionado com sucesso!", id: id });
  } catch (error: any) {
    return NextResponse.json(
      {
        msg: "Erro ao adicionar o membro",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {

    const data = await req.formData();
    const file = data.get("image") as File | String;
    const id = data.get("id");
    const name = data.get("name");
    const profession = data.get("profession");
    const location = data.get("location");
    const email = data.get("email");
    const linkedin = data.get("linkedin");
    let image = "";

    if (file instanceof File){

      const bytes = await file.arrayBuffer();
      const base64String = Buffer.from(bytes).toString("base64")

      const result = await cloudinary.v2.uploader.upload(`data:${file.type};base64,${base64String}`, {
        folder: 'uploads',
        allowed_formats: ['jpg', 'jpeg', 'png'],
        transformation: {
          width: 500,
          height: 500,
          crop: 'limit'
        }
      });
      image = result.secure_url; 

      if(!result.ok){
       throw new Error("Não foi possivel salvar a imagen");
      }

    }else{
      image = file as string;
    }

   
    await prisma.member.update({
      where: { id: id as string },
      data: {
        name: name as string,
        profession: profession as string,
        location: location as string,
        email: email as string,
        linkedin: linkedin as string,
        image: image as string,
      },
    });

    return NextResponse.json({ msg: "Membro atualizado com sucesso!", id: id });
  } catch (error: any) {
    return NextResponse.json(
      {
        msg: "Erro ao atualizar o membro",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
  
    if (!id) {
      throw new Error("ID not provided in URL");
    }

    await prisma.post.deleteMany({
      where: {
        authorId: id,
      }
    })

    await prisma.member.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ msg: "Os dados do membro foram removidos com sucesso!", id: id });
  } catch (error: any) {
    return NextResponse.json(
      {
        msg: "Erro ao remover dados do membro!",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
