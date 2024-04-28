


type Member ={
    id: number,
    image: string,
    name: string,
    profession: string,
    location: string,
    email: string,
    linkedin: string,
};


export const Members = ({member, line} : {member : Member, line: boolean}) => {
  return (
    <div className="w-full max-w-screen-xl p-4">

      {line &&
      <div className="grid place-items-end">
        <div className="border-black mb-5  border w-full"/>
      </div>}

      <div className="grid md:flex md:flex-row text-black">

        <div className="grid place-items-center">
          <img
            src={member.image}
            alt={`Imagen de ${member.name} `}
            style={{ maxWidth: "436px" }}
          />
        </div>

        <div className="mt-5 p-3">
          <h1 className="font-Alegreya font-bold text-2xl border-b-2 mb-5 border-black">
            {member.name} 
          </h1>

          <div className="grid gap-3 md:grid  md:grid-cols-2 break-all">

            {member.profession &&
            <h1 className="font-Lato font-medium text-3xl">
            {member.profession}
            </h1>}

            <div className="grid gap-3 font-Lato font-medium text-zinc-500">

               {member.location &&
              <div className="flex gap-3">
                <img src="/SocialMediaIcons/Location.svg" alt="Location Icon" />
                {member.location}
              </div>}

              {member.email &&
              <a className="flex gap-3 underline">
                <img src="/SocialMediaIcons/Email.svg" alt="Email Icon" />
                {member.email}
              </a>}

              {member.linkedin &&
              <a href={member.linkedin}
                className="flex gap-3">
                <img src="/SocialMediaIcons/Linkedin.svg" alt="Linkedin Icon" />
                {member.linkedin}
              </a>}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
