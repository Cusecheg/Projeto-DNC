import Link from "next/link"

export default function DireitoConsumidor() {
    return(    
    <>
    <main className="bg-gray-200">
      <div className="flex flex-col justify-center">
        <div
          className={"flex justify-start"}
          style={{
          backgroundImage: "url('/ImgAreasDeAtuacao/direito-do-consumidor.svg')",
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
            DIREITO DO CONSUMIDOR
          </h1>
        <div className="border border-white my-3 ml-12 antialiased" />
          </div>
        </div>
    </div>
  </div>

      <div className="text-xl font-medium text-black">
        <h2 className="text-2xl font-bold text-black pb-2 ml-5 mt-5">
          Entendendo o Direito do Consumidor
        </h2>
        <p className="text-black font-Lato p-4">
          O Direito do Consumidor é uma ramificação do Direito que se dedica a proteger 
          os consumidores nas relações de consumo. Ele regula as interações entre 
          <strong> consumidores</strong> e <strong>fornecedores</strong>, sejam eles de 
          <strong> produtos</strong> ou <strong>serviços</strong>.
        </p>

        <p className="text-black font-Lato p-4">
          A principal legislação que rege o Direito do Consumidor é o 
          <Link className="cursor-pointer hover:text-gray-700" 
          href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm">
          <strong> Código de Defesa do Consumidor (CDC)</strong></Link>, estabelecido em 1990. 
          O CDC é um conjunto de normas que visam proteger e defender o consumidor, sendo considerado 
          de ordem pública e interesse social.
        </p>

        <p className="text-black font-Lato p-4">
          O CDC define o <strong>consumidor</strong> como qualquer pessoa <strong>física</strong> 
          ou <strong>jurídica</strong> que adquire ou utiliza produto ou serviço como destinatário final. 
          O <strong>fornecedor</strong>, por outro lado, é qualquer pessoa física ou jurídica, 
          <strong> pública</strong> ou <strong>privada</strong>, <strong>nacional</strong> ou 
          <strong> estrangeira</strong>, além de <strong>entes despersonalizados</strong>, 
          que desenvolvem atividades de produção, <strong>montagem</strong>, <strong>criação</strong>, 
          <strong> construção</strong>, <strong>transformação</strong>, <strong>importação</strong>, 
          <strong> exportação</strong>, <strong>distribuição</strong> ou <strong>comercialização </strong> 
          de produtos ou prestação de serviços.
        </p>

        <p className="text-black font-Lato p-4">
          O objetivo do Direito do Consumidor é prevenir o desrespeito aos direitos nas relações de consumo. 
          A <Link className="cursor-pointer hover:text-gray-700" 
          href="https://www.pge.sp.gov.br/centrodeestudos/bibliotecavirtual/dh/volume%20i/
          difulei8078.htm#:~:text=Artigo%204%C2%BA%20%2D%20A%20Pol%C3%ADtica%20Nacional,
          rela%C3%A7%C3%B5es%20de%20consumo%2C%20atendidos%20os">
          <strong> Política Nacional das Relações de Consumo </strong></Link> 
          visa atender às necessidades dos consumidores, respeitar sua <strong>dignidade</strong>, 
          <strong> saúde</strong> e <strong>segurança</strong>, proteger seus <strong>interesses econômicos</strong>, 
          melhorar sua <strong>qualidade de vida</strong>, bem como promover a <strong>transparência</strong> e 
          <strong> harmonia</strong> nas relações de consumo.
        </p>

    <h3 className="text-xl font-bold text-black p-4">
      Os consumidores têm vários direitos básicos, incluindo:
    </h3>
    <ul className="list-disc pl-9 text-black pr-5">
        <li>
          <strong>Compra fracionada: </strong> 
          Os consumidores têm o direito de comprar apenas a quantidade de um produto que precisam, 
          sem serem obrigados a comprar um pacote inteiro.
        </li>
        <li>
          <strong>Perda da nota fiscal:</strong> Se um consumidor perder uma nota fiscal, 
          ele pode solicitar uma segunda via ao estabelecimento onde a compra foi feita ou 
          ao prestador de serviço.
        </li>
        <li>
          <strong>Venda casada:</strong> É ilegal forçar um consumidor a comprar um produto ou 
          serviço como condição para comprar outro.
        </li>
        <li>
          <strong>Produto com preços diferentes:</strong> Se um produto tiver dois preços diferentes, 
          o menor preço deve prevalecer.
        </li>
        <li>
          <strong>Queda de energia:</strong> Danos causados por queda de energia devem ser reparados 
          pelo fornecedor de energia.
        </li>
        <li>
          <strong>Custeio de medicamentos:</strong> As operadoras de saúde devem fornecer todo o tratamento 
          necessário aos pacientes, incluindo a cobertura de medicamentos.
        </li>
        <li>
          <strong>Comida no cinema:</strong> Os cinemas não podem obrigar os consumidores a comprar alimentos
          e bebidas em suas lojas internas.
        </li>
        <li>
          <strong>Mala extraviada:</strong> Se uma mala for extraviada durante um voo, 
          a companhia aérea tem um prazo máximo para encontrá-la e enviá-la ao endereço 
          informado pelo passageiro.
        </li>
    </ul>

          <p className="text-black font-Lato p-4 pb-5">
            Esses são apenas alguns exemplos dos direitos dos consumidores. 
            É essencial que todos os consumidores conheçam seus direitos e os 
            exerçam quando necessário.
          </p>
      </div>
  </main>
</>
)}