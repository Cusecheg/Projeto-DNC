import Link from "next/link"

export default function DireitoPrevidenciario() {
    return(
    <>
      <main className="bg-gray-200">
      <div className="flex flex-col justify-center">
          <div
              className={"flex justify-start"}
              style={{
              backgroundImage: "url('/ImgAreasDeAtuacao/direito-previdenciario.svg')",
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
                      DIREITO PREVIDENCIÁRIO
                  </h1>
                  <div className="border border-white my-3 ml-12 antialiased" />
              </div>
          </div>
      </div>
  </div>

      <div className="text-xl font-medium text-black">
        <h1 className="text-2xl font-bold text-black pb-2 ml-5 mt-5">
          Direito Previdenciário
        </h1>
        <p className=" text-black font-Lato p-4">
          A previdência social é um sistema que garante a proteção dos trabalhadores 
          e seus dependentes nessas situações. Ela faz parte da seguridade social, que é 
          um conjunto de políticas públicas que visa assegurar os direitos relativos à 
          <strong> saúde</strong>, à <strong>assistência social</strong> e à <strong>previdência social</strong>.
        </p>
        <p className="text-black font-Lato p-4">
          A atuação mais nítida e regular do direito previdenciário está na regulamentação do <Link className="cursor-pointer hover:text-gray-700"
          href="https://www.gov.br/inss/pt-br"><strong>Instituto Nacional do Seguro Social (INSS)</strong></Link>, responsável pela manutenção da 
          previdência social pública do Brasil. Ele regula as relações entre empresas e empregados com os órgãos da previdência 
          <strong> social</strong> ou <strong>privada</strong>.
        </p>
        <p className="font-light text-black font-Lato p-4">
          A reforma da previdência trouxe mudanças importantes na forma com que a previdência social funciona, aumentando a importância 
          do direito previdenciário para advogados que lidem com questões civis e do direito público. Essas mudanças impactam pessoas que 
          podem estar contribuindo há décadas para a previdência social.
        </p>
        <p className="text-black font-Lato p-4">O direito previdenciário é considerado um direito fundamental, defendendo o direito do cidadão 
        a ter acesso aos seus direitos constitucionais. Ele é um direito social brasileiro, firmado pela 
        <Link href="https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" className="cursor-pointer hover:text-gray-700">
        <strong> Constituição Federal de 1988 </strong></Link> em seu artigo <strong>6º</strong>.
        </p>
        <p className="font-light text-black font-Lato p-4 pb-5">
          Assim como o direito penal e o direito civil possuem princípios próprios, o direito previdenciário também possui alguns.
          Trata-se, portanto, de conceitos e preceitos basilares para a constituição dessa área jurídica.
        </p>
    </div>
  </main>
</>
)}