import Link from "next/link"

export default function DireitoDoTrabalho() {
    return(
      <>
      <main className="bg-gray-200">
          <div className="flex flex-col justify-center">
              <div
                  className={"flex justify-start"}
                  style={{
                  backgroundImage: "url('/ImgAreasDeAtuacao/direito-do-trabalho.svg')",
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
                          DIREITO DO TRABALHO
                      </h1>
                      <div className="border border-white my-3 ml-12 antialiased" />
                  </div>
              </div>
          </div>
      </div>


            <div className="text-xl font-medium text-black">
                <h1 className="text-2xl font-medium text-black m-8">
                  <strong>Direito do Trabalho</strong>
                </h1>
                <p className=" text-black font-Lato p-4">
                  O Direito do Trabalho é uma área fascinante e vital do direito que se concentra 
                  na relação entre trabalhadores e empregadores. Este ramo do direito privado é 
                  responsável por regular a relação jurídica entre essas duas partes, baseando-se em 
                  <strong> princípios</strong> e <strong> leis trabalhistas</strong>.
                </p>
                <p className=" text-black font-Lato p-4">
                  A importância do Direito do Trabalho na sociedade é inegável. Afinal, é impossível 
                  compreender a política, a economia e as relações sociais de qualquer lugar sem entender 
                  também as relações de trabalho. Segundo um levantamento realizado pelo 
                  <Link className="cursor-pointer hover:text-gray-700" href="https://www.cnj.jus.br/">
                  <strong> Conselho Nacional de Justiça (CNJ)</strong></Link>, os processos trabalhistas 
                  representam 12% de toda a demanda processual do país.
                </p>
                <p className="text-black font-Lato p-4">
                  É regido principalmente pela <Link className="cursor-pointer hover:text-gray-700" 
                  href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm">
                  <strong>Consolidação das Leis do Trabalho (CLT)</strong>
                  </Link> e pela <Link className="cursor-pointer hover:text-gray-700" 
                  href="https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm">
                  <strong> Constituição Federal de 1988</strong>
                  </Link>. 
                  Estes documentos estabelecem as normas e regras que definem os critérios 
                  mínimos para que a relação entre trabalhador e empregador seja harmoniosa e lícita, 
                  preservando os direitos de ambas as partes e a dignidade humana do trabalhador.
                </p>
                <p className="font-light text-black font-Lato p-4">
                  As leis do trabalho servem para garantir o sustento do trabalhador e, principalmente, 
                  a sua proteção e segurança, uma vez que essa relação é desigual, com uma parte menos favorecida 
                  do que a outra. O trabalhador oferece ao empregador suas habilidades, força de trabalho e tempo, 
                  enquanto o empregador lhe oferece dinheiro. Essa relação contratual para o trabalho, naturalmente 
                  desproporcional, precisa ser protegida por leis específicas que garantam amparo à parte hipossuficiente 
                  (o trabalhador).
                </p>
                <p className="text-black font-Lato p-4">
                  Também é dividido em diversas áreas, como o <strong>Direito Individual do Trabalho</strong>, 
                  o <strong>Direito Coletivo do Trabalho</strong> e o <strong>Direito Público do Trabalho</strong>. 
                  Cada uma dessas áreas tem suas próprias especificidades e desafios, tornando o campo do Direito do 
                  Trabalho um ambiente dinâmico e em constante evolução.
                </p>
                <p className=" text-black font-Lato p-4">
                  O <strong>Direito Individual do Trabalho</strong> é o seguimento do Direito que estuda os contratos/relações 
                  individuais de trabalho e as regras legais ou normativas a ele aplicáveis. Ele trata das relações entre 
                  empregadores e empregados, estabelecendo os direitos e deveres de ambas as partes envolvidas no contrato de 
                  trabalho, visando garantir a proteção dos trabalhadores e promover um equilíbrio nas relações laborais.
                </p>
                <p className=" text-black font-Lato p-4">
                  O <strong>Direito Coletivo do Trabalho</strong> representa o segmento do Direito do trabalho que estuda a 
                  organização sindical, a representação dos trabalhadores, a negociação coletiva e o direito de greve. 
                  Ele regula o direito de diversas pessoas com interesses em comum, que venham a pertencer a um mesmo 
                  conjunto de características, na maioria das vezes, essa representatividade se dá por um sindicato que 
                  pode ser tanto de trabalhadores quanto de empregadores.
                </p>
                <p className=" text-black font-Lato p-4">
                  O <strong>Direito Público do Trabalho</strong> embora não seja tão claramente definido como os outros dois, 
                  é uma parte do Direito do Trabalho que lida com a relação entre o Estado e os trabalhadores, bem como as leis 
                  e regulamentos que o Estado impõe para proteger os direitos dos trabalhadores.
                </p>
              <p className="font-light text-black font-Lato p-4 pb-5">
                O Direito do Trabalho é um campo essencial que busca equilibrar a relação entre trabalhadores e empregadores,
                garantindo que os direitos e a dignidade de ambas as partes sejam respeitados. É um campo que continua a evoluir 
                e a se adaptar às mudanças na sociedade e no mundo do trabalho.
              </p>
          </div>
    </main>
  </>
)}