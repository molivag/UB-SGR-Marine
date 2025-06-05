import { useLocation, useParams, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Tproject from "../types/Tproject";
// import { Link } from "react-router-dom";

import { FaXTwitter, FaInstagram } from "react-icons/fa6";




const FullDescription: React.FC = () => {
  // Scroll global de la ventana
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [15, 15], ["3%", "3%"]);

  const location = useLocation();
  const project = location.state?.project as Tproject | undefined;
  const { acronym } = useParams();
  console.log(acronym);

  if (!project) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div
        className="mx-auto mb-20
      	  xsm:max-w-screen-xsm 
      	  sm:max-w-screen-sm 
      	  md:max-w-screen-sm
      	  lg:max-w-screen-xl
      	  xl:max-w-screen-2xl
      	  4xl:max-w-screen-4xl
      	  5xl:max-w-screen-5xl">
        {/* <strong className=" text-4xl text-UBfoothead font-bold"> */}
        <h1 className="h1">Projects</h1>
        {/* </strong> */}
      </div>
      <div
        className="mb-20 mx-auto grid p-0 grid-cols-1 md:grid-cols-3 w-full min-h-screen
          xsm:max-w-screen-xsm 
          sm:max-w-screen-sm 
          md:max-w-screen-md
          lg:max-w-screen-xl
          xl:max-w-screen-2xl
          4xl:max-w-screen-4xl
          5xl:max-w-screen-5xl">
        {/* Columna izquierda */}
        <div className=" xsm:mr-0 md:mr-10">
          <motion.div
            className="sticky top-0"
            style={{ y }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            <h1 className="mt-0 h2 mb-8  ">
              {project.acronym}
            </h1>
            <h2 className="mt-8 h3 leading-normal mb-40">
              {" "}
              {project.nameProject}
            </h2>
            <h3 className="mt-8 h3 mb-20">Funding Agencies</h3>
            {/* <p className="p">{project.fundingAgency}</p> */}
            <img
              className="block sm:w-2/3 md:w-1/2 lg:w-1/2"
	      src={`/MBE1271/img/projects/${project.imageID_FunAgen}.jpg`}
              alt={`Image of ${project.fundingAgency}
	      as a funding agency of the current project`}
            />

            <hr className="mt-28 mb-2 max-w-32" />
            <div className=" mb-11 ">
              <img
                className=" rounded-md mb-11"
                src={`/MBE1271/img/projects/${project.imageID_ex1}.jpg`}
                alt={`Image related to the project`}
              />
            </div>
          </motion.div>
        </div>

        {/* Columna central */}
        <div className="sm:bt-20 xsm:p-0 p-5 mr-5 xsm:mt-20 md:mt-0 ">
          <motion.div
            className="sticky top-0"
            style={{ y }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            <img
	      loading="lazy"
	      src={`/MBE1271/img/projects/${project.imageID_logo}.jpg`}
              alt={`Image of the ${project.acronym} project`}
              className=" rounded-md"
            />
            <p className=" p text-base my-5">
              Small Description related to the picture Small Description related
              to the picture Small Description related to the picture Small
              Description related to the picture
            </p>
            <hr className="mt-10 border-t border-UBfoothead mb-2 max-w-full" />
            <h3 className="h3 mt-13 ">Period</h3>
            <p className="p mt-5">
              {project.start} - {project.end}
            </p>
            <hr className="mt-10 border-t border-UBfoothead mb-2 max-w-full" />
            <h3 className="h3 mt-13 ">PI of the Project</h3>
            <p className="p mt-5">
              <strong>{project.piproject}</strong>
            </p>
            <hr className="mt-8 border-t border-UBfoothead mb-2 max-w-32" />
            <a href={project.websiteProject} target="_blank">
              <span className="p hover:text-blue-600">
                View full website of the project
              </span>
            </a>

            <div className="flex gap-6">
              {/* <hr className="mt-10 border-t border-UBfoothead mb-2 max-w-full" /> */}
              {project.socialNetwork_x && project.socialNetwork_x.trim() !== "" ? (
                <a
                  href={project.socialNetwork_x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-gray-300"
                >
                  <FaXTwitter size={30} className="mt-5  " />
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
          </motion.div>
        </div>

        {/* Columna derecha (contenido largo sin scroll interno) */}
        <div className=" md:p-4 md:mt-0 md:border-none xsm:p-0 xsm:mt-20 xsm:border-t xsm:border-UBfoothead">
          {[...Array(1)].map((_, i) => (
            <p key={i} className="p text-gray-800 leading-relaxed xsm:mt-5 md:mt-0">
              {project.summary}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default FullDescription;
