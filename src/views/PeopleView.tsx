import MemberDrawer from "../components/TeamMemberDrawer.tsx"
import Tmember from "../types/Tmember";
import Member from "../components/TeamMember.tsx";
import { useEffect, useState } from "react";

function PeoplePage() {

  const [people, setPeople] = useState<Tmember[]>([])
  const [selectedMember, setSelectedMember] = useState<Tmember | null>(null);

  useEffect(() => {
    fetch('info/team.json')
      .then((response) => response.json()) //la response recibida se transforma a json
      .then((data) => setPeople(data)) //y con la data recibida se setea el state
      .catch((err) => console.error("Error cargando el JSON:",err))
  }, []);


  const handleMemberClick = (member: Tmember) => {
    setSelectedMember(member);
  };

  const handleCloseDrawer = () => {
    setSelectedMember(null);
  };

  return (
    <div className="container mx-auto 
      xsm:max-w-screen-xsm 
      sm:max-w-screen-sm 
      md:max-w-screen-sm
      lg:max-w-screen-xl
      xl:max-w-screen-2xl
      4xl:max-w-screen-4xl
      5xl:max-w-screen-5xl">

      <h1 className="h1">
        The SGR MBE TEAM
      </h1>
      <section>
        <div className="grid md:grid-cols-2 xsm:grid-cols-1 mb-5">
          <div className="mt-5">
            <img src="img/edifici_nou.jpg" alt="Imagen del Vestibulo" />
            {/* <p className="mb-4 p"> */}
            {/*   Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
            {/*   Expedita repellat non alias facere, corporis cum consequuntur */}
            {/*   ratione officiis possimus. Voluptas mollitia voluptates */}
            {/*   voluptatem aut iusto ex voluptate odit porro ullam!Odio officiis */}
            {/*   nam error eaque debitis at. Ad optio similique distinctio ipsa, */}
            {/*   natus recusandae delectus vel ut sed ab rerum iusto dolorum */}
            {/*   praesentium unde nihil error illum commodi eligendi. Ab? */}
            {/* </p> */}
          </div>
          <div className="mt-5">
            <aside >
              {/* <h1 className=" mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-UBtitles md:text-5xl lg:text-6xl "> */}
              <p className="ml-5 mt-5 mb-4 p text-green-400 text-opacity-90">
                This is a placeholder text designed to represent the future introductory content for this section of the website. In its finalized version, this paragraph will offer a clear explanation of the purpose of the team page and provide visitors with an overview of what they can expect to find here. The final text will likely describe how this page brings together all the individuals who form part of the group, from senior members and researchers to students and support staff.

                It may also highlight the importance of collaboration within the team and emphasize the diversity of roles, backgrounds, and contributions that help drive the group's mission forward. Additionally, the text could offer context about the team's structure or values, giving visitors a better understanding of who we are and what we do. Until then, this placeholder serves as a visual and spatial stand-in, helping to shape the layout and design of the section as the content continues to develop.

              </p>
            </aside>
          </div>
        </div>

        <div>
          <p className="mb-4 p text-green-400 text-opacity-90">
            This is a placeholder text designed to represent the future introductory content for this section of the website. In its finalized version, this paragraph will offer a clear explanation of the purpose of the team page and provide visitors with an overview of what they can expect to find here. The final text will likely describe how this page brings together all the individuals who form part of the group, from senior members and researchers to students and support staff.

            It may also highlight the importance of collaboration within the team and emphasize the diversity of roles, backgrounds, and contributions that help drive the group's mission forward. Additionally, the text could offer context about the team's structure or values, giving visitors a better understanding of who we are and what we do. Until then, this placeholder serves as a visual and spatial stand-in, helping to shape the layout and design of the section as the content continues to develop.



          </p>

        </div>

        <h2 className="h2 mt-20 mb-50 mb-20 mx-auto">
          Members of SGR MBE
        </h2>

        {/* <h3 className="mt-10 text-4xl font-extrabold text-UBnone"> */}
        {/*   Current Members */}
        {/* </h3> */}

        <div className="mb-20 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 max-w-full min-w-0">


          {people.map((person) => {
            return (
              <Member
                key={person.id}
                dataMember={person}
                onClick={() => handleMemberClick(person)}
              />

            )
          })}
        </div>

        {/* <h2 className="mt-5 text-4xl font-extrabold text-UBnone"> */}
        {/* Former Members */}
        {/* </h2> */}
        {/* <div className=" mb-20 mx-auto grid grid-cols-3 gap-6 gap-y-12 border-4 border-dotted max-w-9/10"></div> */}

        {/* <h2 className="mt-5 text-4xl font-extrabold text-UBnone"> */}
        {/*   PhD Students */}
        {/* </h2> */}
        {/* <div className=" mb-20 mx-auto grid grid-cols-3 gap-6 gap-y-12 border-4 border-dotted max-w-9/10"></div> */}
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
