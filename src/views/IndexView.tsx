// import React from "react";

import { Fragment } from "react/jsx-runtime";
import Seniors from "../components/TeamSenior.tsx";

function IndexPage() {
  return (
    <Fragment>
      <div className="container mx-auto 
          xsm:max-w-screen-xsm 
          sm:max-w-screen-sm 
          md:max-w-screen-md
          lg:max-w-screen-xl
          xl:max-w-screen-2xl
          4xl:max-w-screen-4xl
          5xl:max-w-screen-5xl">
        {/* <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-UBtitles md:text-4xl lg:text-5xl "> */}
        <h1 className="h1">
          Marine Biodiversity and Evolution (MBE)
        </h1>
        <h2 className="h2 mt-3 leading-tight hidden 5xl:block">
          2021 SGR 01271 Grup de Recerca de la Universitat de Barcelona reconegut  per la Generalitat de Catalunya
        </h2>
        <h2 className="h2 mt-3 leading-tight 5xl:hidden">
          2021 SGR 01271 Grup de Recerca de la Universitat de Barcelona reconegut  per la <br />Generalitat de Catalunya
        </h2>
        <div className="mx-auto ">
          <p className="p mt-20 xsm:text-justify md:text-left">
            The main objective of the research group is to study the
            biodiversity of marine organisms and the evolutionary processes that
            generate it. Our lines of research cover a wide range of topics,
            from ecology and anthropogenic impact to aspects related to
            systematics, connectivity, conservation, genomics and adaptation, in
            keystone or invasive species globally, but with special attention to
            biodiversity hotspots. Our research aims at addressing scientific
            and societal challenges regarding marine biodiversity and evolution
            such as:</p>

          <ol className="ml-5 mt-5 list-decimal list-inside space-y-2">
            <li className="p"><span className="p m-0">Increase the knowledge on systematics of poorly known
              groups and habitats</span></li>
            <li className="p"><span className="p m-0">Study population connectivity in keystone species</span></li>
            <li className="p"><span className="p m-0">Understand the adaptation capacity of native and invasive organisms</span></li>
            <li className="p"><span className="p m-0">Monitor the colonization process of endangered species, and </span></li>
            <li className="p"><span className="p m-0">Analyse how species and communities will face and behave in front of perturbations of their environment in the current scenario of global change.</span></li>

          </ol>

          <div>
            <img
              className=" mt-20 mx-auto xsm:size-auto md:w-1/2"
              src="/img/imagen1.png"
              alt="Organization of the Marine Biodiversity and Evolution Department"
            />
	    <p className="p text-base text-center text-green-400 text-opacity-90 xsm:text-justify md:text-left px-2">
              This is a sample text used solely for demonstration purposes. Its goal is to showcase how the applied text styling—such as transparency—appears in relation to the previous image or layout. The content itself has no informational value and can be easily replaced with the final text when available.
            </p>
          </div>

          <h2 className="h2 mt-20">
            Senior Members
          </h2>
          <Seniors />
        </div>
      </div>
    </Fragment>
  );
}
export default IndexPage;
