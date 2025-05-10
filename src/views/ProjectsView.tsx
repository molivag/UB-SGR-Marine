import { Fragment } from "react/jsx-runtime";
import ProjectComp from "../components/Projects";
import {projects} from "../../data/projects.ts"
import {useState} from "react";

function ProjectsPage() {
  const [TheProjects] = useState(projects)


  return (
    <Fragment>
    <div className="@container border-8 border-dashed border-orange-950">

      <section className="my-10">
        <div className="mx-auto max-w-screen-xl py-8 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Project of the SGR Group
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-10 text-2xl font-semibold text-gray-900 sm:text-3xl">
          Current Projects
        </h2>


      <div className="grid grid-cols-1 justify-items-center gap-y-10 align-middle gap-4 lg:grid-cols-3 lg:gap-8">
	{TheProjects.map((aProject)=>{
	  return(
	    <ProjectComp
	    key={aProject.id}
	    dataProject={aProject}
	  />
	)
	})}
      </div>

      </section>
    </div>
    </Fragment>
  );
}
export default ProjectsPage;
