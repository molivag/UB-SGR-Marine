// function Member({props}){    ----> entre llaves es desctructuring
import { FaGoogleScholar } from "react-icons/fa6";
import { FaOrcid } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
import Tmember from "../types/Tmember";

import { FaEnvelope } from "react-icons/fa";

// aqui lo que hacemos es NO desestructurar el objeto prop que tiene las propiedas member(que es un objeto) y key que es un numero
function Member(prop: {
  dataMember: Tmember;
  key: number;
  onClick: () => void;
}) {
  // o bein podria desestructurarlo como:
  // function Member( {Name_prop, key}: {Name_prop:Tmember, key:number}) {
  // -----Es decir en el caso de desestructurar el prop, el nombre que le pongamos a
  // -----prop debe ser el mismo que el declarado en el type que coincide con el valor de la prop que se esta pasando desde el componente padre, es decir, el que renderiza el componente hijo. En palabras tecnicas:
  // *** Al desestructurar props, los nombres de las variables deben coincidir con las claves del objeto props recibido desde el componente padre y con las definiciones en el tipo de TypeScript.***

  return (
    <div>
      {/* <div className="bg-blue-50 grid grid-row-2 gap-4"> */}
      <div className="flex justify-center">
        <div className="flex justify-center relative group">
          <img
	    loading="lazy"
            className="w-32 sm:w-44 md:w-48 lg:w-56  xl:w-64 
	    rounded-3xl for-small for-middle 
	    shadow-lg 
	    transition-transform duration-300 transform 
	    group-hover:scale-105"
            src={`img/team/${prop.dataMember.imageID}.jpg`}
            alt={`Photo of ${prop.dataMember.name} `}
          />
          <div
            className="absolute inset-0 rounded-3xl 
	          bg-black bg-opacity-50 flex items-center 
	          justify-center opacity-0 group-hover:opacity-100
	          transition-transform duration-300 
	          transform group-hover:scale-105 cursor-pointer"
            onClick={prop.onClick}
          >
            <span className="text-white text-2xl font-bold">
              View Bio
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center col-4 ">
        {/* <h3 className="h3member">{prop.dataMember.name}</h3> */}
        <h3 className="h3">{prop.dataMember.name}</h3>
        <h4 className="h4 mb-3">{prop.dataMember.category}</h4>
        <div className=" w-full">
          <p>
            <em>Department</em>: {prop.dataMember.department}
          </p>
          <p>
            <em>Research Group</em>: {prop.dataMember.group}
          </p>
          {prop.dataMember.email && (
            <a
              href={`mailto:${prop.dataMember.email}`}
              className="flex items-center gap-2"
            >
              <FaEnvelope size={18} className="text-UBfoothead" />
              <span className="text-gray-600 hover:text-orange-500">
                {prop.dataMember.email}
              </span>
            </a>
          )}
        </div>

        <div className="flex gap-x-2 mb-4 mt-4">
          <a
            href={`${prop.dataMember.orcid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaOrcid size={30} className="text-UBtitles" />
          </a>
          <a
            href={`${prop.dataMember.scholar}`}
            target="_blank"
          >
            <FaGoogleScholar size={30} className="text-UBtitles" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Member;
