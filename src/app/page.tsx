import { ControlledCarousel } from "@/components";

export default async function Home() {
  return (
    <div>
      <ControlledCarousel>
        <h1 className="md:text-42 text-3xl font-bold mb-2 antialiased">
          Morais & Ribeiro
        </h1>
        <h2 className="md:text-2xl text-base font-bold antialiased">
          Somos mais do que apenas advogados - somos uma parceria fundada na
          amizade e no profissionalismo.
        </h2>
        <div className="border border-white my-3 antialiased"></div>
        <p className="font-Lato font-normal md:text-lg text-sm mb-3">
          Confie em nós para representar seus interesses com paixão,
          profissionalismo e comprometimento. Somos um escritório de atuação
          full service, 360º, adaptando,entendendo e acolhendo cada cliente com
          sua respectiva demanda.
        </p>
        <p className="font-Lato font-normal md:text-lg text-sm">
          Estamos honrados em fazer parte de sua jornada jurídica e ansiosos
          para trabalhar juntos na busca por soluções eficazes e justas.
        </p>
      </ControlledCarousel>
      <h1>Home</h1>
    </div>
  );
}
