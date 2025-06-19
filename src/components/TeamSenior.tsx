import { useEffect, useState } from "react";
import Tmember from "../types/Tmember";

function Seniors() {
  const [people, setPeople] = useState<Tmember[]>([]);

  //el hook useEffect nos permitira hacer la peticion de la data por http y llevara dos argumentos 
  //useEffect(()=>{},[]) una funcion flecha y un array vacio para ejecutarse una unica vez cuando se 
  //monte el componente.
  useEffect(() => {
    fetch("info/team.json")
      .then((response) => response.json())
      .then((data) => setPeople(data))
  }, []);
  //con el useEffect anterior, cada vez que el estado cambie, se fuerza un renderizado nuevo.

  return (
    <div className="py-10 sm:py-10">
      <div className="mx-auto grid-rows-2 xl:grid-cols-3 gap-20 px-20  5xl:px-10
    xsm:max-w-full xsm:px-2
    xl:max-w-full xl:px-20 
    3xl:max-w-full 3xl:px-20
    5xl:max-w-full 5xl:px-20 
    ">
        <div className="mt-10 grid 
      xsm:grid-cols-1
      md:grid-cols-2 md:bg-inherit 
      lg:grid-cols-3 gap-8 md:gap-12">
          {people.map((person) => {
            if (person.senior === "yes") {
              return (
                <div
                  key={person.name}
                  // items-center --> Agregar al div de abajo si es necesario en estilo
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 "
                >
                  <img
                    className="rounded-lg mx-auto md:mx-0 
		xsm:size-72 sm:size-28 md:size-32 5xl:size-40 
		transition-transform duration-300 hover:scale-105 cursor-pointer"
                    src={`img/team/${person.imageID}.jpg`}
                    alt="Avatar"
                    onClick={() => window.open(person.website, '_blank', 'noopener,noreferrer')}
                  />

                  <div className="grow">
                    <div>
                      <h6 className="h3">
                        {person.name}
                      </h6>
                      <p className="p mt-1 text-xs uppercase text-gray-500 dark:text-neutral-500">
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

        <ul
          // Aqui van la clase para el numero de columnas
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 xl:col-span-2"
        >
          {people.map((person) => {
            if (person.category === "Senior") {
              return (
                <li key={person.name}>
                  {/* Este es el div que controla senior members foto y texto */}

                  <div className=" flex items-center gap-x-6">
                    <img
                      alt=""
                      // src={`img/team/${person.imageID}.jpg`}
                      src={`img/team/${person.imageID}.jpg`}
                      className="rounded-lg size-24 "
                    />
                    <div className="border-2 border-dotted border-blue-300">
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm/6 font-semibold text-indigo-600">
                        {person.department}
                      </p>
                    </div>
                  </div>
                </li>
              );
            }
            return null; // Si no es "Senior", no renderiza nada
          })}
        </ul>
      </div>
    </div>
  );




  // return (
  //   <div className="py-10 sm:py-10">
  //     <div className="mx-auto grid-rows-2 xl:grid-cols-3 gap-20 px-20 
  //   xsm:max-w-full xsm:px-2
  //   xl:max-w-full xl:px-20 
  //   3xl:max-w-full 3xl:px-20
  //   5xl:max-w-full 5xl:px-20 
  //   ">
  //       <div className="mt-10 grid 
  //     xsm:grid-cols-1 xsm:space-y-3
  //     md:grid-cols-2 md:bg-inherit 
  //     lg:grid-cols-3 gap-8 md:gap-12
  //         ">
  //         {people.map((person) => {
  //           if (person.senior === "yes") {
  //             return (
  //               <div
  //                 key={person.name}
  //                 // items-center --> Agregar al div de abajo si es necesario en estilo
  //                 className=" grid grid-cols-1 sm:items-center gap-3 sm:gap-4 ">
  //                 <img
  //                   className="xsm:mx-auto sm:mx-0 rounded-lg xsm:size-28 sm:size-32 5xl:size-36 transition-transform duration-300 hover:scale-105 cursor-pointer"
  //                   src={`/img/team/${person.imageID}.jpg`}
  //                   alt="Avatar"
  //                   onClick={() => window.open(person.website, '_blank', 'noopener,noreferrer')}
  //                 />

  //                 <div className="grow">
  //                   <div>
  //                     <h6 className="h6 xsm:text-center sm:text-left">
  //                       {person.name}
  //                     </h6>
  //                     <p className="mt-1 text-xs uppercase text-gray-500 dark:text-neutral-500">
  //                       {person.department}
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             );
  //           } else {
  //             return null; // Si no es "Senior", no renderiza nada
  //           }
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // );
}
export default Seniors;

