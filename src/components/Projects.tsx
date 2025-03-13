import { Fragment } from "react/jsx-runtime";

function ProjectComp() {
  return (
    <Fragment>
      <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 mb-32">
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>

        <div className="bg-UBnone relative flex h-full transform items-end border-2 border-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="grid grid-cols-2 align-middle p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:py-2">
            <img
              className="lg:mb-5 min-w-[550px] max-w-[350px] w-full object-contain rounded-3xl for-small"
              src="/img/test1.jpg"
              alt=""
            />
            <div>
              <h2 className="mt-4 text-xl  font-bold sm:text-xl ">
                Genomic divergence, plasticity and microbiome shifts in marine
                invertebrates along natural environmental gradients (ENVIOME)
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-20 size-10 sm:size-8 lg:size-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-20 size-10 sm:size-8 lg:size-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>{" "}
            <ul>
              <li>09/01/2022 - 08/31/2026</li>
            </ul>
          </div>

          <div className="absolute p-1 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-2">
            <h3 className="mt-2 text-xl font-medium sm:text-2xl">
              Nombre del Proyecto
            </h3>

            <p className="mt-4 text-sm sm:text-base">
              Marine invertebrates inhabiting wide environmental gradients hold
              the required biological mechanisms to face that environmental
              heterogeneity. Among these biological mechanisms, there are those
              acting at the intraspecific level at different evolutionary and
              temporal scales such as: a) the genomic divergence of populations
              as a consequence of local adaption under differential selective
              pressures over generations, and b) the phenotypic plasticity,
              resulting from a genotype-by-environment interaction, that is
              expressed during the lifetime of the individual organism.
              Additionally to those intraspecific processes, during the last
              years, it has been demonstrated the relevance of the interspecific
              relationship between the invertebrate hosts and their associated
              symbiotic microbiota in the plasticity of the host responses to
              environmental changes and stressful conditions. As a result of the
              interaction between the intraspecific and interspecific processes,
              the different populations within the species found across marine
              environmental gradients may display varying levels of resistance
              and vulnerability to the physical-chemical changes around them. T
            </p>

            <p className="mt-8 font-bold">Read more</p>
          </div>
        </div>
      </a>
    </Fragment>
  );
}
export default ProjectComp;
