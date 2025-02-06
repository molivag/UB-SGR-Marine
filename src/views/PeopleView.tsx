// import React from "react";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { team } from "../../public/team";
import Member from "../components/TeamMember.tsx";

function PeoplePage() {
  const [people, setPeople] = useState(team);

  console.log(team);
  return (
    <div className="mx-auto border-6 border-double container ">
      <section>
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-UBtitles md:text-5xl lg:text-6xl ">
          Team Members for SGR
        </h1>

        <h2 className="text-4xl font-extrabold text-UBnone">Current Members</h2>

        <div className=" mb-10 mx-auto grid grid-cols-3 gap-6 gap-y-12 border-4 border-dotted max-w-9/10">
	
	{people.map(()=>{
	  return(
	  <p>Desde Guitar</p>
	  )
	}
	 )}
        </div>

        <h2 className="mt-5 text-4xl font-extrabold text-UBnone">
          Former Members
        </h2>
        <div className=" mb-10 mx-auto grid grid-cols-3 gap-6 gap-y-12 border-4 border-dotted max-w-9/10">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>

        <h2 className="mt-5 text-4xl font-extrabold text-UBnone">
          PhD Students
        </h2>
        <div className=" mb-10 mx-auto grid grid-cols-3 gap-6 gap-y-12 border-4 border-dotted max-w-9/10">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </section>
    </div>
  );
}

export default PeoplePage;
