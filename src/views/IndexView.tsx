// import React from "react";

import { Fragment } from "react/jsx-runtime";
import Seniors from "../components/TeamSenior.tsx";

function IndexPage() {
  return (
    <Fragment>
      <div className="container">
        <div className="mx-auto px-6">
          <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-UBtitles md:text-5xl lg:text-6xl ">
            Marine Biodiversity and Evolution
          </h1>
          <h2 className="text-center">
            Marine Biodiversity and Evolution (MBE) 2021 SGR 01271
          </h2>
          <h3 className="text-center mx-auto">
            Grup de Recerca de la Generalitat de Catalunya
          </h3>
          <p>
            The main objective of the research group is to study the
            biodiversity of marine organisms and the evolutionary processes that
            generate it. Our lines of research cover a wide range of topics,
            from ecology and anthropogenic impact to aspects related to
            systematics, connectivity, conservation, genomics and adaptation, in
            keystone or invasive species globally, but with special attention to
            biodiversity hotspots. Our research aims at addressing scientific
            and societal challenges regarding marine biodiversity and evolution
            such as: 1) increase the knowledge on systematics of poorly known
            groups and habitats, 2) study population connectivity in keystone
            species, 3) understand the adaptation capacity of native and
            invasive organisms, 4) monitor the colonization process of
            endangered species, and 5) analyse how species and communities will
            face and behave in front of perturbations of their environment in
            the current scenario of global change.
          </p>
          <img
            className="mt-10 mx-auto sm:w-60 md:w-80 lg:w-90 xl:w-120 "
            // className=" rounded-full w-64 h-64 "
            //
            src="/img/imagen1.png"
            alt="Marine Biodiversity and Evolution"
          />
        <Seniors />
        </div>
      </div>
    </Fragment>
  );
}
export default IndexPage;
