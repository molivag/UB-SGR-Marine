import Tproject from "../types/Tproject";
import { Fragment } from "react/jsx-runtime";
import ProjectComp from "../components/Projects";
import { useState, useEffect } from "react";

function ProjectsPage() {
  const [TheProjects, setTheProjects] = useState<Tproject[]>([]);


  useEffect(() => {
    fetch('info/projects.json')
      .then((res) => res.json())
      .then((data) => setTheProjects(data));
  }, []);


  return (
    <Fragment>
      {/* <div className="@container border-8 border-dashed border-orange-950"> */}
      <div className="mb-20 mx-auto max-w-screen-2xl 
      sm:max-w-screen-sm 
      md:max-w-screen-md
      lg:max-w-screen-lg
      xl:max-w-screen-2xl 
      3xl:max-w-screen-3xl 
      4xl:max-w-screen-4xl 
      5xl:max-w-screen-5xl px-4">
        {/* <section className="my-10"> */}
        {/*   <div className="mx-auto max-w-screen-xl py-8 "> */}
        {/*     <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:items-center md:gap-8"> */}
        {/*       <div> */}
        {/*         <div className="max-w-lg md:max-w-none"> */}
        {/*           <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl"> */}
        {/*             Project of the SGR Group */}
        {/*           </h2> */}
        {/**/}
        {/*           <p className="mt-4 p "> */}
        {/*             Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
        {/*             Tenetur doloremque saepe architecto maiores repudiandae amet */}
        {/*             perferendis repellendus, reprehenderit voluptas sequi. */}
        {/*           </p> */}
        {/*         </div> */}
        {/*       </div> */}
        {/**/}
        {/*       <div> */}
        {/*         <img */}
        {/*           src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" */}
        {/*           className="rounded-3xl " */}
        {/*           alt="" */}
        {/*         /> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </section> */}
        <section className="mt-10">
          <h1 className="h1 mb-20">
            Current Projects
          </h1>
          <div className="px-3 grid grid-cols-1 justify-items-center gap-y-10 align-middle 
	    md:grid-cols-2 md:gap-8 
            lg:grid-cols-2 lg:gap-y-12 lg:gap-x-1 
            xl:grid-cols-3 xl:gap-y-20 xl:gap-x-1
            5xl:grid-cols-4 5xl:gap-x-10">
            {TheProjects.map((aProject) => {
              return (
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
