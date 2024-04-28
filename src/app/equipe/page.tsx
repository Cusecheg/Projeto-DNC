import { Members } from "@/components/Members/Members";

const data = [
  {
    id: 1,
    name: "DRA. NIKOLLY KAROLINE MORAIS E SILVA ",
    profession: "Advogada",
    location: "São Paulo/SP",
    email: "nikolly2@hotmail.com",
    linkedin: "https://www.linkedin.com/in/nikolly-morais-silva-4a7271169/",
    image: "/ImgMembers/Nikolly.svg",
  },

  {
    id: 2,
    name: "DR. JOÃO PEDRO RIBEIRO",
    profession: "Advogado",
    location: "São Paulo/SP",
    email: "j.pedro.resende@hotmail.com",
    linkedin: "https://www.linkedin.com/in/joaopedrorrmoliveira/",
    image: "/ImgMembers/Joao.svg",
  },

  {
    id: 3,
    name: "DR. GUSTAVO SANTOS RIBEIRO",
    profession: "Advogado",
    location: "São Paulo/SP",
    email: "",
    linkedin: "https://www.linkedin.com/in/gustavo-santos-ribeiro-31b652196/",
    image: "/ImgMembers/Gustavo.svg",
  },
]


export default function Equipe() {
  return (
    <div>
      <div className="grid place-items-center  bg-cover  bg-top " style={{backgroundImage: "url('/ImgSobreNos/Equipe.svg')", height: "659px"}}>
        <div className="grid grid-cols-2 place-items-center w-full max-w-screen-xl">
            <h1 className="font-Alegreya font-bold text-5xl">
              Equipe
            </h1>
        </div>
      </div>
      <div className="grid place-items-center" style={{backgroundColor: "white"}}>
        {data.map(member => 
        <Members key={member.id} member={member} line={ member.id == 1? false : true}
        />)}

      </div>
    </div>
  );
}
