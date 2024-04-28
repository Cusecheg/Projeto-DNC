import Link from "next/link"

export default function DireitoEmpresarial() {
return(
  <>
  <main className="bg-gray-200">
      <div className="flex flex-col justify-center">
          <div
              className={"flex justify-start"}
              style={{
              backgroundImage: "url('/ImgAreasDeAtuacao/direito-empresarial.svg')",
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
                      DIREITO EMPRESARIAL
                  </h1>
                  <div className="border border-white my-3 ml-12 antialiased" />
              </div>
          </div>
      </div>
  </div>



      <div className="text-xl font-medium text-black">   
        <h1 className="text-2xl font-bold text-black pb-2 ml-5 mt-5">
          Direito Empresarial
        </h1>
          <p className="font-light text-black font-Lato p-4">
            O Direito Empresarial, também conhecido como Direito Comercial, 
            é um ramo do Direito Privado que se dedica ao estudo e regulamentação das 
            relações entre empresários, empresas e o mercado.
          </p>
          <p className="font-light text-black font-Lato p-4">
            Este campo do direito abrange um conjunto específico de normas (regras e princípios) 
            que disciplinam a atividade econômica organizada para a produção ou circulação de bens ou 
            serviços. Em outras palavras, o Direito Empresarial é responsável por resolver conflitos 
            de interesses envolvendo empresários ou relacionados às empresas que eles exploram.
          </p>
          <p className=" text-black font-Lato p-4">
            Também não está relacionado a toda a ordem jurídica do mercado, mas apenas à parte dela, 
            que tem a ver com a organização da empresa e com a interação entre empresas. Normas que 
            regem as relações de emprego <Link className="cursor-pointer hover:text-gray-700" 
            href="/areas-de-atuacao/direito-do-trabalho"><strong>(Direito do Trabalho) </strong></Link> 
            e de consumo <Link className="cursor-pointer hover:text-gray-700" href="/areas-de-atuacao/direito-do-consumidor">
            <strong>(Direito do Consumidor)</strong></Link> estão apartadas do Direito Empresarial.
          </p>
          <p className=" text-black font-Lato p-4">
            Ele abrange tópicos como a <strong>constituição de empresas</strong>, <strong>fusões e aquisições</strong>, 
            <strong> direitos do consumidor</strong>, <strong>propriedade intelectual</strong>, <strong>contratos comerciais</strong>, 
            entre outros. Por meio dele, normatizam-se, por exemplo, <strong>contratos</strong>, <strong>títulos de crédito</strong> e 
            <strong> propriedade industrial</strong> e <strong>intelectual</strong>.
          </p>
          <p className="font-light text-black font-Lato p-4">
            A origem do Direito Empresarial remonta à civilização comunal italiana, onde o comércio já atingira um estágio mais avançado. 
            É nessa época que se costuma apontar o surgimento das raízes do <span className="italic">ius mercatorum</span>, ou seja, um regime 
            jurídico específico e autônomo, com características, institutos e princípios próprios, para a disciplina das relações mercantis.
          </p>
          <p className=" text-black font-Lato p-4">
            Se distingue do Direito Civil por se fundamentar numa principiologia própria, que destaca a imprescindibilidade da empresa como 
            instrumento para o desenvolvimento econômico e social das sociedades contemporâneas. Esses princípios próprios do direito empresarial
            estão listados na <Link className="cursor-pointer hover:text-gray-700" 
            href="https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm">
            <strong>Constituição Federal de 1988</strong></Link>, mais precisamente em seu <strong>art. 170.</strong>
          </p>
          <p className="mb-font-light text-black font-Lato p-4 pb-5">
            O Direito Empresarial é um campo crucial para a saúde econômica e o desenvolvimento de um país, estruturando a 
            organização empresarial moderna e regulando o status legal do empreendedor.
          </p>
      </div>
  </main>
</>
)}