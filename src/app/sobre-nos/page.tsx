'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SobreNos() {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsAnimationActive(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div
        className={`flex ${
          isAnimationActive ? "animate-slide" : "bg-center"
        }`}
        style={{
          backgroundImage: "url('/ImgSobreNos/Equipe.svg')",
          height: "659px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex pt-5 md:w-556 w-full items-start ml-5 mt-9"

          style={{marginTop: '300px', marginLeft: '80px', marginRight: '80px'}}

        >
          <div className="flex flex-col md:w-856 sw-full">
            <h1 className="font-Alegreya md:text-3xl text-xl pt-11 font-bold ">
              Somos um escritório de advocacia composto por três colegas de faculdade que cultivaram uma relação sólida desde os bancos acadêmicos!
            </h1>
            <div className="border border-white my-3 antialiased" />
            <p className="font-Lato leading-tight">
              Nossa sociedade nasceu da visão compartilhada de oferecer serviços jurídicos de excelência, moldados pela experiência adquirida
              ao longo de nossos anos de estudo e prática. Profissionais altamente qualificados e especializados em diversas áreas do direito, 
              o Dr. Gustavo Santos Ribeiro possui vasta experiência em responsabilidade civil, direito do consumidor e isenção de imposto de renda
              em casos de doença grave; O Dr. João Pedro Ribeiro destaca-se na esfera trabalhista, com expertise em compliance, danos morais e LGPD;
              e a Dra. Nikolly Karoline Morais e Silva é especializada em Advocacia Cível e Direito Tributário, com ênfase em negociação, contratos 
              e resolução de conflitos. Nosso compromisso é oferecer assistência jurídica de alta qualidade, eficiente e adaptada às necessidades
              únicas de cada cliente.
            </p>
          </div>
        </div>
      </div>
 
      <div className="grid gap-12">
        <div
          className="grid place-items-center"
          style={{ backgroundImage: "url('/ImgSobreNos/BackgroundGrey.svg')" }}
        >
          <div className="grid max-w-[806px]">
            <div className="grid grid-cols-auto-fit text-black gap-12 pt-8 pb-8">
              <h1 className=" font-Alegreya font-bold text-4xl">
                Nossa missão é guiar cada interação com nossos clientes.
              </h1>
              <p className="font-Lato font-normal">
                Na Morais & Ribeiro Advocacia e Consultoria Jurídica, nossa
                missão é conduzida por três pilares fundamentais: foco,
                conhecimento e inovação. Estamos comprometidos em fornecer
                soluções jurídicas e de negócios que transcendam as expectativas
                de nossos clientes e desafiem os paradigmas tradicionais da
                advocacia.
              </p>
            </div>
          </div>
        </div>

        <div className="grid place-items-center  gap-12 bg-black">
          <div className="grid justify-center max-w-[806px]">
            <div className="grid grid-cols-auto-fit gap-12 ">
              <div className="grid place-items-center">
                <img className="h-full rounded-2xl" src="/ImgSobreNos/ImgTransparencia.jpeg"/>
              </div>
              <div className="grid gap-12">
                <h1
                  className="text-center bg-zinc-600 text-2xl font-Alegreya font-bold"
                  style={{ marginLeft: "20%" }}
                >
                  TRANSPARÊNCIA TOTAL
                </h1>
                <p
                  className="text-start"
                  style={{ marginLeft: "10%", marginRight: "10%",  marginBottom: "20px"}}
                >
                  Acreditamos que a transparência é essencial para qualquer
                  relação sólida. Na Morais & Ribeiro, comprometemo-nos a
                  fornecer informações claras e compreensíveis sobre os
                  processos legais e seus possíveis desdobramentos. Buscamos
                  eliminar barreiras na comunicação jurídica, garantindo que
                  nossos clientes estejam sempre informados e capacitados a
                  tomar decisões.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-auto gap-12">
              <h1
                className="text-center bg-zinc-600 text-2xl font-Alegreya font-bold"
                style={{ width: "375px" }}
              >
                SOLUÇÕES EFICAZES
              </h1>
              <p style={{ marginRight: "30%", marginLeft: "10%" }}>
                {" "}
                Entendemos que cada situação jurídica é única, e abordamos
                cada caso com uma perspectiva personalizada. Nosso objetivo
                não é apenas resolver conflitos, mas fazê-lo de maneira
                efetiva, rápida e justa. Empregamos estratégias inovadoras,
                aliadas à nossa experiência, para encontrar soluções que
                atendam aos interesses de nossos clientes.
              </p>
            </div>
            <div className="grid grid-cols-auto-fit text-end gap-12">
              <div></div>
              <div className="grid gap-12">
                <h1
                  className="text-center bg-zinc-600 text-2xl font-Alegreya font-bold"
                  style={{ marginLeft: "20%" }}
                >
                  EMPATIA E COMPROMETIMENTO
                </h1>
                <p
                  className="text-start"
                  style={{ marginLeft: "10%", marginRight: "10%" }}
                >
                  {" "}
                  No coração do nosso serviço está a empatia. Compreendemos as
                  complexidades emocionais e legais que envolvem questões
                  jurídicas e nos comprometemos a lidar com cada cliente com
                  respeito, empatia e compreensão. Estamos aqui para ouvir,
                  aconselhar e agir em prol do melhor interesse de quem confia
                  em nossa expertise.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-auto gap-12">
              <div className="grid place-items-end w-full">
                <div className=" w-4/5 border border-white mt-8 " />
              </div>
              <div
                className="grid place-items-start grid-rows-auto gap-12"
                style={{ marginLeft: "10%" }}
              >
                <h1 className="text-center text-2xl font-Alegreya font-bold">Visão</h1>
                <p className="text-start" style={{ marginRight: "40%" }}>
                  {" "}
                  Uma Sociedade de Advogados alinhada às transformações
                  sociais e seus reflexos nas dinâmicas jurídicas, adotando e
                  adaptando-se às inovações tecnológicas em constante
                  evolução.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center text-black" style={{ backgroundImage: "url('/ImgSobreNos/BackgroundGrey.svg')" }}>
          <div className="grid gap-12 pb-8 pt-8 text-center" style={{maxWidth: "1280px"}}>
            <h1 className=" text-3xl font-bold font-Alegreya">
              Descubra as maneiras pelas quais podemos apoiar a sua causa!
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-12 p-8 mb-4">
    <Link href="/areas-de-atuacao/direito-civil-geral">
      <img src="/ImgAreasDeAtuacao/miniaturas/direito-civil-geral.svg" alt="Card-Geral" className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" />
    </Link>

    <Link href="/areas-de-atuacao/direito-de-familia">
    <img src="/ImgAreasDeAtuacao/miniaturas/direito-de-familia.svg" alt="Card-Familia"className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" />
    </Link>

    <Link  href="/areas-de-atuacao/direito-tributario">
    <img src="/ImgAreasDeAtuacao/miniaturas/direito-tributario.svg" alt="Card-Tributario" className="hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"/>
    </Link>
  </div>

          </div>
        </div>
      </div>
    </div>
  );
}
