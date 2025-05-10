import { Fragment } from "react/jsx-runtime";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Tproject from "../types/Tproject";


function ProjectComp(prop:{
  dataProject: Tproject
  key: number
}) {
  return (
    <Fragment>

      <Card
        className="max-w-sm bg-green-50 flex flex-col justify-between h-full"
        renderImage={() => (
          <img
            src={`img/projects/${prop.dataProject.imageID_logo}.jpg`}
            alt={`Logo of the project ${prop.dataProject.projectID}`}
            className="w-full h-auto"
          />
        )}
      >
        <div className="flex-grow border-4 border-dashed border-red-400">
          <h5 className="text-xl text-UBfoothead font-bold tracking-tight dark:text-white">
            {prop.dataProject.nameProject}
          </h5>
        </div>
	<div>
	<h6 className="text-UBfoothead font-semibold">Duration</h6>
	<p>{prop.dataProject.start} - {prop.dataProject.end}</p>
	</div>
      
	<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel recusandae veniam iure repudiandae, quod, tempore atque sit culpa blanditiis dolorum sapiente provident? Dicta totam atque eius doloribus vero, similique facilis!</p>
        <div className="mt-4">
      	<Link
      	to={`/Projects/${prop.dataProject.acronym}`}
      	state={{ project: prop.dataProject }}
      	>
      	  <hr className="border-t border-UBfoothead mb-2 max-w-32" />
      	  <span className="font-semibold hover:text-blue-600">
      	    Read More
      	  </span>
          </Link>
        </div>
      </Card>
    </Fragment>
  );
}

export default ProjectComp;
