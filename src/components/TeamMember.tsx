// function Member({props}){    ----> entre llaves es desctructuring
import { FaGoogleScholar } from "react-icons/fa6";
import { FaOrcid } from "react-icons/fa";

type Tmember = {
  id: number;
  current: boolean;
  name: string;
  category: string;
  department: string;
  group: string;
  email: string;
  orcid: string;
  scholar: string;
  website: string;
  socialmedia: string;
  imageID: string;
  description: string;
};

// aqui lo que hacemos es NO desestructurar el objeto prop que tiene las propiedas member(que es un objeto) y key que es un numero
function Member(prop: { dataMember: Tmember; key: number }) {
  // o bein podria desestructurarlo como:
  // function Member( {Name_prop, key}: {Name_prop:Tmember, key:number}) {
  // -----Es decir en el caso de desestructurar el prop, el nombre que le pongamos a
  // -----prop debe ser el mismo que el declarado en el type que coincide con el valor de la prop que se esta pasando desde el componente padre, es decir, el que renderiza el componente hijo. En palabras tecnicas:
  // *** Al desestructurar props, los nombres de las variables deben coincidir con las claves del objeto props recibido desde el componente padre y con las definiciones en el tipo de TypeScript.***

  return (
    <div>
      {/* <div className="bg-blue-50 grid grid-row-2 gap-4"> */}
      <div className="py-3 w-full max-w-full">
        <img
          className="mx-auto w-32  sm:w-44 md:w-48 lg:w-56  xl:w-64 h-auto object-cover rounded-full for-small for-middle"
          // className=" rounded-full w-64 h-64 "
          src={`img/team/${prop.dataMember.imageID}.jpg`}
          alt={`Photo of ${prop.dataMember.name} `}
        />
      </div>
      <div className="col-4 ">
        <h3>{prop.dataMember.name}</h3>
        <p>
          <em>Category</em>: {prop.dataMember.category}
        </p>
        <p>
          <em>Department</em>: {prop.dataMember.department}
        </p>
        <p>
          <em>Research Group</em>: {prop.dataMember.group}
        </p>
        <p>
          <em>e-mail</em>: {prop.dataMember.email}
        </p>
        <div className="flex gap-x-2 mb-4">
          <a
            href={`${prop.dataMember.orcid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaOrcid />
          </a>
          <a href="">
            <FaGoogleScholar />
          </a>
        </div>
        <p>
          <em>Bio</em>: {prop.dataMember.description}
        </p>
      </div>
    </div>
  );
}

export default Member;
