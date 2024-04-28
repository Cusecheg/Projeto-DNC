import Link from "next/link";
export default function AreasAtuacao() {
  return (
  <>
  <main className="bg-gray-200">
    <div className="flex flex-col justify-center">
        <div
          className={"flex justify-start"}
          style={{
            backgroundImage: "url('/ImgAreasDeAtuacao/AreaAtuacao.svg')",
            height: "359px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            className="flex md:w-456 md:justify-start justify-center items-center md:w-456 w-full"
          >
            <div className="flex flex-col md:w-456  w-full md:px-8 px-4">
              <h1 className="font-Lato md:text-3xl text-xl ml-12 font-bold ">
                ÁREAS DE ATUAÇÃO
              </h1>
                <div className="border border-white my-3 ml-12 antialiased" />
            </div>
          </div>
      </div>
  </div>

          <div className="flex flex-wrap justify-center items-center gap-12 p-8 mb-4">
          <Link  href="/areas-de-atuacao/direito-do-consumidor">
              <img 
              src="/ImgAreasDeAtuacao/miniaturas/direito-do-consumidor.svg" 
              alt="Direito-Do-Consumidor" 
              className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
              />
          </Link>

          <Link href="/areas-de-atuacao/direito-do-trabalho">
              <img 
              src="/ImgAreasDeAtuacao/miniaturas/direito-do-trabalho.svg" 
              alt="Direito-Do-Trabalho"
              className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" 
              />
            </Link>

            <Link href="/areas-de-atuacao/direito-tributario">
              <img 
              src="/ImgAreasDeAtuacao/miniaturas/direito-tributario.svg" 
              alt="Direito-Tributario" 
              className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 p-8 mb-4">
            <Link href="/areas-de-atuacao/direito-empresarial">
              <img 
              src="/ImgAreasDeAtuacao/miniaturas/direito-empresarial.svg" 
              alt="Direito-Empresarial" 
              className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" 
              />
            </Link>

            <Link href="/areas-de-atuacao/direito-de-familia">
              <img 
              src="/ImgAreasDeAtuacao/miniaturas/direito-de-familia.svg" 
              alt="Diraito-Da-Familia"
              className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" 
              />
            </Link>

            <Link href="/areas-de-atuacao/direito-civil-geral">
              <img 
              src="/ImgAreasDeAtuacao/miniaturas/direito-civil-geral.svg" 
              alt="Direito-Geral" 
              className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" 
              />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 p-8 mb-4">
            <Link href="/areas-de-atuacao/direito-criminal">
              <img 
              src="/ImgAreasDeAtuacao/miniaturas/direito-criminal.svg" 
              alt="Direito-Criminal" 
              className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" 
              />
            </Link>

            <Link href="/areas-de-atuacao/direito-previdenciario">
              <img src="/ImgAreasDeAtuacao/miniaturas/direito-previdenciario.svg" 
              alt="Direito-Previdenciario"
              className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" 
              />
            </Link>

            <Link href="/areas-de-atuacao/direito-internacional">
            <img 
            src="/ImgAreasDeAtuacao/miniaturas/direito-internacional.svg" 
            alt="Direito-Internacional" 
            className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
            />
            </Link>
          </div>
    </main>
    </>
)}
