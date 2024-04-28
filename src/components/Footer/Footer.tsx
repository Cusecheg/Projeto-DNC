import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import logo from "../../../public/logo.svg";

export const Footer = () => {
  return (
    <footer className="pt-8 font-Alegreya">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex md:flex-row flex-col md:justify-between items-center m-4">
          <Image
            src={logo}
            alt="Logo Morais & Ribeiro"
            width={300}
            height={100}
            className="w-auto"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto">
            <div className=" text-center">
              <h2 className="mb-4 text-xl font-medium">
                São José dos Campos - SP
              </h2>
              <div className="font-medium font-Lato leading-relaxed">
                <p className="text-sm">R. Antônio Aleixo da Silva, 1880 -</p>
                <p className="text-sm">Jardim Satélite, São José dos Campos</p>
                <p className="text-sm">SP, 12231-650</p>
              </div>
            </div>
            <div className="text-center ">
              <h2 className="mb-4 text-xl font-medium">Atendimento</h2>
              <p className="text-base font-Lato">
                De Segunda a Sexta das 09:00 às 12:00 e das 13:30 às 18:00
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center text-center">
              <div className="flex items-center m-2 text-base ml-2">
                <p>
                  <MailOutlineIcon /> <strong className="ml-1">E-mail:</strong>{" "}
                  moraiseribeiroadvju@gmail.com
                </p>
              </div>
              <div className="flex items-center m-2 text-base ml-2">
                <p>
                  <CallOutlinedIcon /> <strong className="ml-1">Telefone:</strong>{" "}
                (12)99160-4267
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center text-sm text-center">
          Morais & Ribeiro 2024 | Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};


