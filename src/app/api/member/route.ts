import { PrismaClient } from "@prisma/client";
import { writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";
import path from "path";

const prisma = new PrismaClient();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
});



export async function GET() {
  try {
    const allMembers = await prisma.member.findMany();

    return NextResponse.json(allMembers);
  } catch (error) {
    return NextResponse.json({
      msg: error,
      status: 500,
      error: error,
    });
  }
}

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
    const file = data.get("image") as File;
    const lastImage = data.get("lastImage")?.toString();
    let image: string | undefined = "";

    if (file instanceof File) {
      image = `/uploads/${file.lastModified.toString()}_${file.name}`;
    } else {
      image = lastImage;
    }
    const id = data.get("id")?.toString();
    const name = data.get("name");
    const profession = data.get("profession");
    const location = data.get("location");
    const email = data.get("email");
    const linkedin = data.get("linkedin");

    if (image !== lastImage) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filePath = path.join(
        process.cwd(),
        "public/uploads",
        `${file.lastModified.toString()}_${file.name}`
      );
      writeFile(filePath, buffer);

      await unlink(`public${lastImage}`);
    }
    await prisma.member.update({
      where: { id },
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
    const filePath = req.nextUrl.searchParams.get("filePath");
    if (!id || !filePath) {
      throw new Error("ID not provided in URL");
    }
    await unlink(`public${filePath}`);

    await prisma.member.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ msg: "Membro apagado com sucesso!", id: id });
  } catch (error: any) {
    return NextResponse.json(
      {
        msg: "Erro ao apagar membro!",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
