import { useState } from "react";
import { team } from "../../data/team2";

function Seniors() {
  const [people] = useState(team);

  return (
    <div className="py-10 sm:py-10">
      <div className="mx-auto grid-rows-2 xl:grid-cols-3 gap-20 px-20 
    xsm:max-w-full xsm:px-2
    xl:max-w-full xl:px-20 
    3xl:max-w-full 3xl:px-20
    5xl:max-w-full 5xl:px-20 
    ">
        <div className="mt-10 grid 
      xsm:grid-cols-1 xsm:space-y-3
      md:grid-cols-2 md:bg-inherit 
      lg:grid-cols-3 gap-8 md:gap-12
          ">
          {people.map((person) => {
            if (person.senior === "yes") {
              return (
                <div
                  key={person.name}
                  // items-center --> Agregar al div de abajo si es necesario en estilo
                  className=" grid grid-cols-1 sm:items-center gap-3 sm:gap-4 ">
                  <img
                    className="xsm:mx-auto sm:mx-0 rounded-lg xsm:size-28 sm:size-32 5xl:size-36 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    src={`/img/team/${person.imageID}.jpg`}
                    alt="Avatar"
                    onClick={() => window.open(person.website, '_blank', 'noopener,noreferrer')}
                  />

                  <div className="grow">
                    <div>
                      <h6 className="h6 xsm:text-center sm:text-left">
                        {person.name}
                      </h6>
                      <p className="mt-1 text-xs uppercase text-gray-500 dark:text-neutral-500">
                        {person.department}
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null; // Si no es "Senior", no renderiza nada
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Seniors;

