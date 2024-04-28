import Image from "next/image";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";

export default function PublicacoesAdmin() {
  return (
    <>
      <main className="bg-gray-200">
        <div className="flex flex-col justify-center">
          <div
            className={"flex justify-start"}
            style={{
              backgroundImage: "url('/ImgPublicacoes/publicacoes.svg')",
              height: "359px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="flex md:w-456 md:justify-start justify-center items-center md:w-456 w-full">
              <div className="flex flex-col md:w-456  w-full md:px-8 px-4">
                <h1 className="font-Lato md:text-3xl text-xl ml-12 font-bold ">
                  PUBLICAÇÕES
                </h1>
                <div className="border border-white my-3 ml-12 antialiased" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-end mt-4">
            <Link href="/publicacoes-admin/novo-artigo">
              <button 
              className="bg-black text-white rounded-lg px-4 py-2 mr-4">
                PUBLICAR ARTIGO
              </button>
            </Link>
        </div>

        <div className="flex flex-col justify-start items-start p-4">
          <h1 className="font-Lato text-3xl text-black font-thin ml-8">
            Artigos
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center p-4">
          <div className="flex justify-center">
            <Image 
            src="/ImgPublicacoes/ArtigoNicolly.svg" 
            alt="Artigo-Nicolly" 
            width={700} 
            height={700} 
            />
          </div>
          <div className="flex items-start mt-4">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-red-500"></div> 
              <div className="ml-4">
                <p 
                className="mt-4 text-xl text-black font-bold leading-relaxed">
                  Nicolly Morais Silva
                </p> 
                <p 
                className="text-xl text-gray-800 leading-relaxed">
                  Advogada
                </p> 
                <p className="text-xl text-gray-700 leading-relaxed">
                  Data de publicação: 01/04/2024 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto py-8 px-4">
          <p className="text-xl text-gray-800 leading-relaxed">
              A internet trouxe consigo inúmeras oportunidades, mas também 
              desafios significativos, especialmente no que diz respeito à segurança 
              dos dados. Uma das áreas mais preocupantes é a chamada "Dark Web", um 
              segmento oculto da internet onde atividades ilícitas muitas vezes florescem, 
              incluindo a venda e troca de informações pessoais e sensíveis.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              A exposição de dados na Dark Web apresenta uma ameaça considerável para 
              indivíduos e organizações. Informações como números de cartões de crédito,
              dados bancários, informações de login, e até mesmo detalhes de identificação 
              pessoal podem ser encontrados à venda nesta parte obscura da internet. 
              As consequências dessa exposição podem ser devastadoras, incluindo roubo de 
              identidade, fraude financeira e até mesmo chantagem.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              Do ponto de vista jurídico, as consequências são igualmente graves. 
              No Brasil a Lei Geral de Proteção de Dados é a legislação 
              aplicada à responsabilidade das organizações em garantir a segurança 
              desses dados. Quando ocorre uma violação de dados e essas informações 
              acabam na Dark Web, as empresas podem enfrentar processos judiciais significativos, 
              multas pesadas, danos à reputação, e ainda com a possibilidade de pagamento de danos 
              em razão da exposição do cliente.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              Além disso, há implicações éticas a considerar. As empresas têm a responsabilidade 
              moral de proteger os dados confiados a elas por clientes e funcionários. A negligência 
              na proteção dessas informações pode resultar em perda de confiança do cliente e danos 
              irreparáveis à empresa.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              Diante desse cenário, é crucial que as organizações adotem medidas proativas 
              para proteger seus dados. Isso inclui investir em sistemas de segurança robustos, 
              implementar práticas de segurança cibernética eficazes e educar funcionários sobre 
              a importância da proteção de dados.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              Em última análise, a exposição de dados na Dark Web é um lembrete contundente da 
              importância crítica da segurança digital. As consequências jurídicas e éticas são sérias 
              e devem servir como um chamado à ação para todas as organizações que lidam com dados sensíveis. 
              Somente com medidas robustas de proteção e colaboração eficaz podemos esperar mitigar os riscos 
              e proteger nossa segurança online nessa era digital.
          </p>
          <div className="mt-8">
            <p className="text-xl text-gray-800 leading-relaxed">
              E você, já sabia que existem consequências 
              pela exposição de dados pessoais? Como estão os seus dados? 
              E como está a sua empresa em relação à LGPD?
            </p>
        </div>
      </div>
        <div className="flex flex-col justify-center items-center p-4">
            <div className="flex justify-center">
              <Image 
              src="/ImgPublicacoes/ArtigoJoao.svg" 
              alt="Artigo-Joao" 
              width={700} 
              height={700} 
              />
            </div>
        </div>
        <div className="flex items-center justify-center mt-4">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-red-500"></div> 
                <div className="ml-4 text-center">
                  <p className="mt-4 text-xl text-black font-bold leading-relaxed">
                      João Pedro Rezende Ribeiro e Morais de Oliveira
                    </p> 
                    <p className="text-xl text-gray-800 leading-relaxed">
                      Advogado Trabalhista | Direito | Compliance | LGPD | Cálculo Trabalhista | 
                      Suporte Jurídico | Contratos | Promoção do Direito
                    </p> 
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Data de publicação: 09/04/2024 
                    </p>
              </div>
            </div>
        </div>
      <div className="max-w-3xl mx-auto py-8 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              PJ ou CLT: Avaliando Vantagens e Desvantagens
            </h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              CLT - Estabilidade e Proteção:
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              O regime CLT oferece uma gama de benefícios e proteções para os trabalhadores, 
              como férias remuneradas, décimo terceiro salário, seguro-desemprego e benefícios 
              previdenciários. Além disso, estabelece direitos fundamentais, como jornada de 
              trabalho definida, horas extras remuneradas, descanso semanal remunerado e aviso 
              prévio em caso de demissão sem justa causa. Essas garantias proporcionam segurança 
              financeira e estabilidade no emprego, reduzindo a incerteza sobre o futuro. O regime 
              CLT também impõe obrigações significativas aos empregadores, como o pagamento de encargos 
              trabalhistas e contribuições sociais, assegurando proteção aos trabalhadores.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              PJ: Flexibilidade e Autonomia na Contratação:
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Trabalhar como Pessoa Jurídica oferece uma maior flexibilidade e autonomia ao trabalhador.
              Isso permite estabelecer seus próprios horários, preços e abordagens para reduzir a carga tributária. 
              Além disso, pode resultar em ganhos maiores do que sob o regime CLT, pois o trabalhador pode negociar
              sua remuneração e não está sujeito a impostos retidos na fonte nem a contribuições para a previdência social. 
              A contratação como PJ também oferece a oportunidade de ter várias fontes de renda, se desejado.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Qual é o Melhor Modelo de Contratação?
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Não existe uma resposta única para essa pergunta, pois depende das circunstâncias individuais 
              de cada trabalhador e empregador. Para alguns, o regime CLT pode ser preferível, oferecendo segurança 
              e benefícios garantidos. No entanto, outros podem optar por trabalhar como PJ devido à flexibilidade, 
              autonomia e potencial de ganhos mais elevados. Portanto, a escolha entre PJ e CLT deve ser baseada em 
              uma avaliação cuidadosa das necessidades, preferências e objetivos pessoais. É crucial considerar não 
              apenas os aspectos financeiros, mas também a qualidade de vida, satisfação profissional e segurança no 
              trabalho. Em resumo, o modelo de contratação mais vantajoso é aquele que melhor atende às necessidades e 
              valores individuais de cada pessoa.
            </p>
          </div>
      </div>
          <div className="d-flex justify-center items-center pb-6">
              <Pagination/>
          </div>
      </main>
    </>
  );
}
