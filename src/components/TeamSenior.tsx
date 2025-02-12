import { useState } from "react";
import { team } from "../../public/team2";

// type Tmember = {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   category: string;
// };

function Seniors() {
  const [people] = useState(team);
  return (
    <div className="py-10 sm:py-10">
      <div className="mx-auto grid-rows-2 max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="border-8 border-red-800 border-double ">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Senior Members
          </h2>
          <p className="mt-6 text-lg/8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            officia animi dolores veritatis mollitia inventore magnam odit,
            deleniti odio accusantium qui aspernatur, repellendus sed est hic
            ipsa iusto similique culpa?
          </p>
        </div>
        <ul
          // Aqui van la clase para el numero de columnas 
          role="list"
          className="border-8 border-double grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 xl:col-span-2"
        >
          {people.map((person) => {
            if (person.category === "Senior") {
              return (
                <li key={person.name}>
		{/* Este es el div que controla senior members foto y texto */}
                  <div className=" flex items-center gap-x-6">
                    <img
                      alt=""
                      // src={`/img/team/${person.imageID}.jpg`}
                      src={`/img/team/${person.imageID}.jpg`}
                      className="size-52 rounded-full"
                    />
                    <div className="border-2 border-dotted border-blue-300" >
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
}
export default Seniors;
