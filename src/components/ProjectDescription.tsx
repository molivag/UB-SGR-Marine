import { useLocation,useParams, Navigate } from "react-router-dom"
import Tproject from "../types/Tproject"
import { Link } from "react-router-dom";

import {FaXTwitter} from "react-icons/fa6"

function FullDescription() {
  const location = useLocation();
  const project = location.state?.project as Tproject | undefined;
  const {acronym} = useParams();


  if (!project) {
    return <Navigate to="/" replace />;
  }
  return(
    <>
    <div className="mb-20"><strong className="text-4xl text-UBfoothead font-bold">Projects</strong></div>
    <div className="h-[120vh] grid md grid-cols-3 gap-8 lg:grid-cols-3 

    border-8 border-dotted border-green-700">
        <div className="sticky top-0 h-screen border-4 border-green-400">
        	<h1 className="mt-4 mb-8 ">{project.acronym}</h1>
        	<strong className="mt-8 text-xl"> {project.nameProject }</strong>
        	<h2 className="mt-8 mb-4">Founding Agencies</h2>
        	{project.fundingAgency}
        	<img className="block sm:w-2/3 md:w-1/2 lg:w-1/2" 
        	src={`/img/projects/${project.imageID_FunAgen}.jpg`} 
        	alt={`Image of ${project.fundingAgency} as a funding agency of the current project`}/>
        </div>
        <div className="col-span-2 h-screen overflow-y-auto scrollbar-hidden">
          <div className="grid grid-cols-2 gap-8 h-max">
            <div className="border-4 border-dashed border-purple-500"> {/* central Column*/} 
              <img className=" rounded-md" 
      	      src={`/img/projects/${project.imageID_logo}.jpg`}
      	      alt={`Image of ${project.fundingAgency} as a funding agency of the current project`}
      	      />
              <p className="text-sm my-5">
      	      	Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati officiis harum non omnis 
      	      	error autem deserunt reiciendis ducimus! Ipsum ratione veritatis accusamus voluptatibus animi cumque,
      	      	facere dolorum consectetur explicabo!
      	      </p>
              <div className="mt-5">
                 <h3>Period</h3>
                 <p>{project.start} - {project.end}</p>
              </div>
	      <hr className="mt-8 border-t border-UBfoothead mb-2 max-w-32"
	      />
              {project.socialNetwork_x && project.socialNetwork_x.trim() !== "" ? (
                <a
                  href={project.socialNetwork_x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
	          <FaXTwitter size={30} />
	        </a>
	      ):null}
      	      <hr className="mt-8 border-t border-UBfoothead mb-2 max-w-32" />
	      <a href={project.websiteProject} target="_blank">
		<span className="hover:text-blue-600" >View full website of the project</span>
	      </a>

      	    </div>
            <div className="flex border-4 border-red-600">  {/* right Column*/} 
              <div className="flex-auto">
                <p>
      	      	{project.summary}
                </p>
              </div>
            </div>
      	  </div>
      </div>
    </div>

    </>
  )
	
}

export default FullDescription
