// import React from "react";
import { useState } from "react";
import { team } from "../../public/team2";
import Tmember from "../types/Tmember";
import Member from "../components/TeamMember.tsx";
import MemberDrawer from "../components/TeamMemberDrawer.tsx"

function PeoplePage() {
  const [people] = useState(team);
  const [selectedMember, setSelectedMember] = useState<Tmember | null>(null);

  const handleMemberClick = (member:Tmember) => {
    setSelectedMember(member);
  };

  const handleCloseDrawer = () => {
    setSelectedMember(null);
  };

  return (
    <div className="mx-auto border-6 border-double container ">
      <section>
        <div className="grid grid-cols-2 mb-40">
          <div className="border-8 border-dotted border-green-800 mt-5">
            <h1 className="py-20">FOTO Departamento</h1>
          </div>
          <div className="mt-5">
            <aside>
              <h1 className=" mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-UBtitles md:text-5xl lg:text-6xl ">
                The SGR MBE TEAM
              </h1>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur tempora sit dignissimos sint natus! Exercitationem
                tempora necessitatibus possimus cumque, omnis incidunt mollitia
                quia excepturi ad asperiores provident iure quis. Rerum! Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Minus aut
                unde provident, ullam nostrum nulla natus eaque harum porro
                sequi. Nostrum beatae quo eaque quidem veniam eos voluptas iure
                dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quidem ab explicabo aliquam voluptatum. Dolores soluta voluptas
                temporibus quis. Sunt debitis consequuntur quidem. Possimus
                veritatis deleniti, culpa neque non quo facilis?
              </p>

              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita repellat non alias facere, corporis cum consequuntur
                ratione officiis possimus. Voluptas mollitia voluptates
                voluptatem aut iusto ex voluptate odit porro ullam!Odio officiis
                nam error eaque debitis at. Ad optio similique distinctio ipsa,
                natus recusandae delectus vel ut sed ab rerum iusto dolorum
                praesentium unde nihil error illum commodi eligendi. Ab?
              </p>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur tempora sit dignissimos sint natus! Exercitationem
                tempora necessitatibus possimus cumque, omnis incidunt mollitia
                quia excepturi ad asperiores provident iure quis. Rerum! Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Minus aut
                unde provident, ullam nostrum nulla natus eaque harum porro
                sequi. Nostrum beatae quo eaque quidem veniam eos voluptas iure
                dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quidem ab explicabo aliquam voluptatum. Dolores soluta voluptas
                temporibus quis. Sunt debitis consequuntur quidem. Possimus
                veritatis deleniti, culpa neque non quo facilis?
              </p>

              <p className="mb-4">
                LoTerem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita repellat non alias facere, corporis cum consequuntur
                ratione officiis possimus. Voluptas mollitia voluptates
                voluptatem aut iusto ex voluptate odit porro ullam!Odio officiis
                nam error eaque debitis at. Ad optio similique distinctio ipsa,
                natus recusandae delectus vel ut sed ab rerum iusto dolorum
                praesentium unde nihil error illum commodi eligendi. Ab?
              </p>
            </aside>
          </div>
        </div>
	
	<h1 className="mt-30 mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-UBtitles md:text-5xl lg:text-6xl ">
          Team Members of SGR MBE
        </h1>

        <h2 className="mt-10 text-4xl font-extrabold text-UBnone">
          Current Members
        </h2>

	<div className="mb-20 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 border-4 border-dotted max-w-full min-w-0">


          {people.map((person) => {
	    return(
	      <Member 
	      key={person.id} 
	      dataMember={person} 
              onClick={() => handleMemberClick(person)}
	      />

	    )
          })}
        </div>

        <h2 className="mt-5 text-4xl font-extrabold text-UBnone">
          Former Members
        </h2>
        <div className=" mb-20 mx-auto grid grid-cols-3 gap-6 gap-y-12 border-4 border-dotted max-w-9/10"></div>

        <h2 className="mt-5 text-4xl font-extrabold text-UBnone">
          PhD Students
        </h2>
        <div className=" mb-20 mx-auto grid grid-cols-3 gap-6 gap-y-12 border-4 border-dotted max-w-9/10"></div>
      </section>

      <MemberDrawer
        isOpen={!!selectedMember}
        onClose={handleCloseDrawer}
        member={selectedMember}
      />

    </div>
  );
}

export default PeoplePage;
