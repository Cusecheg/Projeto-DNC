import { FormAddMember, MembersContainer } from "@/components";
import db from "@/lib/db";
import { auth } from "../../../auth";
import { HeaderEquipe } from "@/components/HeaderEquipe/headerEquipe";



export default async function Equipe() {

  const members = await db.member.findMany();
  const session = await auth();

  return (
    <div className="relative">
      <HeaderEquipe/>
      <div
        className="grid place-items-center"
        style={{ backgroundColor: "white" }}
      >
        {session && (
          <div className="max-w-screen-xl  w-full">
            <FormAddMember />
          </div>
        )}
        {members.map((member, index: any) => (
          <MembersContainer
            key={member.id}
            image={member.image || ""}
            id={member.id}
            name={member.name}
            profession={member.profession}
            location={member.location}
            email={member.email}
            linkedin={member.linkedin}
            line={index == 0 ? false : true}
            session={session?.expires}
          />
        ))}
      </div>
    </div>
  );
}
