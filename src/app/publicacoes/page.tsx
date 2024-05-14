import { auth } from "@/../auth";
import { Artigo } from "@/components";
import db from "@/lib/db";
import Link from "next/link";

export default async function Publicacoes() {
  const session = await auth();
  const artigo = await db.post.findMany();
  return (
    <>
      <main className="bg-gray-200 w-full">
        <div className="flex flex-col justify-center ">
          <div
            className="flex justify-center"
            style={{
              backgroundImage: "url('/ImgPublicacoes/publicacoes.svg')",
              height: "359px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          >
            <div className="grid grid-cols-1 justify-start items-center max-w-screen-xl w-full">
              <div className="flex flex-col max-w-md w-full p-5">
                <h1 className="font-Lato md:text-3xl text-xl font-bold">
                  PUBLICAÇÕES
                </h1>
                <div className="border border-white my-3  antialiased" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-end mt-4"></div>

        <div className="flex justify-center items-center p-4 w-full">
          <div className="flex flex-col w-80 gap-2  items-center max-w-screen-xl md:justify-between md:w-full p-8 md:flex md:flex-row">
            <h1 className="text-3xl text-black underline font-Alegreya font-bold">Artigos</h1>
            {session && (
              <Link
                href={"/novo-artigo"}
                className="bg-black rounded-md  text-white font-Alegreya mt-8 md:m-0   px-4 py-2  transition-all duration-500 hover:-translate-y-2"
              >
                Publicar Novo Artigo
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-4">
          {artigo.map((artigo, index) => (
            <Artigo
              key={artigo.id}
              title={artigo.title}
              member={artigo.authorId}
              text={artigo.text}
              image={artigo.image}
              datePublication={artigo.datePublication}
              line={index}
            />
          ))}
        </div>
      </main>
    </>
  );
}
