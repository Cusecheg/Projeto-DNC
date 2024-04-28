import Link from "next/link"

export default function DireitoDeFamilia () {
    return (    
    <>
        <main className="bg-gray-200">
            <div className="flex flex-col justify-center">
                <div
                    className={"flex justify-start"}
                    style={{
                    backgroundImage: "url('/ImgAreasDeAtuacao/direito-de-familia.svg')",
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
                            DIREITO DE FAMÍLIA
                        </h1>
                        <div className="border border-white my-3 ml-12 antialiased" />
                    </div>
                </div>
            </div>
        </div>

            <div className="text-xl font-medium text-black">

                <div className="text-2xl font-bold text-black pb-2 ml-5 mt-5">
                    Direito de Família
                </div>
                <p className="text-black font-Lato p-4">
                    O Direito de Família é um ramo especializado do <strong>Direito Civil</strong> que se 
                    dedica a regular as relações pessoais e patrimoniais que surgem a partir do <strong>matrimônio</strong>, 
                    da <strong>união estável</strong>, do <strong>parentesco</strong>, da <strong>tutela</strong> e da <strong>curatela</strong>.
                </p>
                <p className="text-black font-Lato p-4">
                    Este ramo do direito está intimamente ligado ao <strong>Direito Sucessório </strong>
                    (que trata do patrimônio familiar), <strong>Direito das Coisas</strong> (que aborda os direitos sobre bens), 
                    <strong> Direitos das Obrigações</strong> (que discute os deveres familiares) e <strong>Direito Previdenciário </strong> 
                    (que inclui a pensão por morte de cônjuge).
                </p>
                <p className="text-black font-Lato p-4">
                    A <Link className="cursor-pointer hover:text-gray-700" 
                    href="https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm">
                    <strong>Constituição Federal de 1988</strong></Link>, em seu <strong>Título VIII (Ordem Social), Capítulo VII 
                    (Da Família, da Criança, do Adolescente, do Jovem e do Idoso)</strong>, estabelece que "a família, base da sociedade, 
                    tem especial proteção do Estado" (art. 226).
                </p>
                <p className="text-black font-Lato p-4">
                    O Direito de Família abrange uma variedade de estruturas familiares, incluindo a 
                    <strong> família matrimonial</strong> (formada pelo casamento), a <strong>família informal </strong> 
                    (formada por uma união estável), a <strong>família monoparental </strong> 
                    (formada por qualquer um dos pais e seus descendentes), a <strong>família anaparental </strong> 
                    (formada sem os genitores, somente pelos irmãos), a <strong>família unipessoal </strong> 
                    (família de uma pessoa só), a <strong>família homoafetiva</strong> (formada por pessoas do mesmo gênero), 
                    a <strong>família mosaico ou recomposta</strong> (pais que têm filhos e se separam, e eventualmente 
                    começam a viver com outra pessoa que também tem filhos de outros relacionamentos), a  
                    <strong> família simultânea ou paralela</strong> (se enquadra naqueles casos em que um indivíduo 
                    mantém duas relações ao mesmo tempo), e a <strong>família eudemonista</strong> (família afetiva, 
                    formada por uma parentalidade socioafetiva).
                </p>
                <p className="text-black font-Lato p-4">
                    Além disso, o Direito de Família também lida com questões como 
                    <strong> casamento</strong>, <strong>separação</strong>, <strong>divórcio</strong>, <strong>guarda dos filhos</strong>,
                    <strong> pensão alimentícia</strong>, <strong>adoção</strong>, <strong>reconhecimento de união estável</strong>, 
                    <strong> partilha de bens</strong>, <strong>testamentos</strong> e <strong>inventários</strong>, 
                    entre outros.
                </p>
                <p className="font-light text-black font-Lato p-4 pb-5">
                    Em suma, o Direito de Família é um campo vital do Direito que busca garantir a proteção e
                    a justiça nas relações familiares, contribuindo para a harmonia e o bem-estar da sociedade 
                    como um todo.
                </p>

    </div>
</main>
    </>)
}
