import { useLocation, useParams, Navigate } from "react-router-dom";
import Tproject from "../types/Tproject";
import { Link } from "react-router-dom";

import { FaXTwitter, FaInstagram } from "react-icons/fa6";

function FullDescription() {
  const location = useLocation();
  const project = location.state?.project as Tproject | undefined;
  const { acronym } = useParams();

  if (!project) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div className="mb-20">
        <strong className=" text-4xl text-UBfoothead font-bold">Projects</strong>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-20 lg:grid-cols-3 
      xsm:max-w-screen-xsm 
      sm:max-w-screen-sm 
      md:max-w-screen-sm
      lg:max-w-screen-xl
      xl:max-w-screen-2xl
      4xl:max-w-screen-4xl
      5xl:max-w-screen-5xl
      
      border-8 border-dotted border-green-700">
	
	<div className="border-4 border-green-400">
          <h1 className="mt-4 h1 mb-8 ">{project.acronym}</h1>
          <h2 className="mt-8 h3 leading-normal mb-40"> {project.nameProject}</h2>
          <h3 className="mt-8 h3 mb-20">Founding Agencies</h3>
	  {/* <p className="p">{project.fundingAgency}</p> */}
          <img
            className="block sm:w-2/3 md:w-1/2 lg:w-1/2"
            src={`/img/projects/${project.imageID_FunAgen}.jpg`}
	    alt={`Image of ${project.fundingAgency}
	      as a funding agency of the current project`}
          />

          <hr className="mt-28 border-t border-UBfoothead mb-2 max-w-32" />
          <img
            className=" w-1/2 border-2 "
            src={`/img/projects/${project.imageID_ex1}.jpg`}
            alt={`Image related to the project`}
          />
          <img
	  className=" rounded-md "
            src={`/img/projects/${project.imageID_ex1}.jpg`}
            alt={`Image related to the project`}
          />
          <img
            className=" rounded-md"
            src={`/img/projects/${project.imageID_ex1}.jpg`}
            alt={`Image related to the project`}
          />
	</div>
	
        {/* <div className="grid grid-cols-2 gap-8"> */}

          <div className="border-4 border-dashed border-purple-500">
            {" "}
            {/* central Column*/}
            <img
              className=" rounded-md"
              src={`/img/projects/${project.imageID_logo}.jpg`}
              alt={`Image of ${project.fundingAgency} as a funding agency of the current project`}
            />
            <p className=" p text-base my-5">
              Small Description related to the picture 
              Small Description related to the picture 
              Small Description related to the picture 
              Small Description related to the picture 
            </p>
            
            <hr className="mt-10 border-t border-UBfoothead mb-2 max-w-full" />
	    <h3 className="h3 mt-13 ">Period</h3>
            <p className="p mt-5">
	      {project.start} - {project.end}
            </p>

            <hr className="mt-10 border-t border-UBfoothead mb-2 max-w-full" />
	    <h3 className="h3 mt-13 ">PI of the Project</h3>
	    <p className="p mt-5"><strong>{project.piproject}</strong></p>
	    
            <hr className="mt-8 border-t border-UBfoothead mb-2 max-w-32" />
            <a href={project.websiteProject} target="_blank">
              <span className="p hover:text-blue-600">
                View full website of the project
              </span>
            </a>
	    
            {/* <hr className="mt-10 border-t border-UBfoothead mb-2 max-w-full" /> */}
            {project.socialNetwork_x &&
            project.socialNetwork_x.trim() !== "" ? (
              <a
                href={project.socialNetwork_x}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaXTwitter size={30} className="mt-5"/>
              </a>
            ) : null}
            {project.socialNetwork_inst &&
            project.socialNetwork_inst.trim() !== "" ? (
              <a
                href={project.socialNetwork_inst}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram size={30} />
              </a>
            ) : null}


	  </div>
	  
	  <div className="flex border-4 border-red-600">
            {/* right Column*/}
            <div className="flex-auto">
              <p className="p">{project.summary}</p>
            </div>
          </div>

        {/* </div> */}
      </div>
    </>
  );
}

export default FullDescription;
