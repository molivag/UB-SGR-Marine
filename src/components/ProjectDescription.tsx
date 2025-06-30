import { useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Tproject from "../types/Tproject";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

import { useEffect, useState } from "react";

const FullDescription: React.FC = () => {
  // Scroll global de la ventana
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [15, 15], ["3%", "3%"]);
  const { acronym: rawAcronym } = useParams<{ acronym: string }>();
  const acronym = decodeURIComponent(rawAcronym || "");
  const [project, setProject] = useState<Tproject | null>(null);

  useEffect(() => {
    console.log("Acronym desde la URL:", acronym); // 👈
    fetch("/MBE1271/info/projects.json")
      .then((res) => res.json())
      .then((projects: Tproject[]) => {
        console.log("Proyectos cargados:", projects); // 👈

        const found = projects.find((p) => p.acronym === acronym);

        console.log("Proyecto encontrado:", found); // 👈

        if (found) setProject(found);
      });
  }, [acronym]);

  if (!project) return <div className="p-10">Project not found.</div>;
  return (
    <>
      <div
        className="
          mx-auto mb-20
      	  xsm:max-w-screen-xsm 
      	  sm:max-w-screen-sm 
      	  md:max-w-screen-sm
      	  lg:max-w-screen-xl
      	  xl:max-w-screen-2xl
      	  4xl:max-w-screen-4xl
      	  5xl:max-w-screen-5xl">
        {/* <strong className=" text-4xl text-UBfoothead font-bold"> */}
        <h1 className="h1 xsm:pl-3">Projects</h1>
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
            className="sticky top-0 xsm:p-3"
            style={{ y }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            <h2 className="mt-0 h2 mb-8  ">
              {project.acronym}
            </h2>

            <p className="text-justify md:pr-16 break-words"> <strong className="mt-8 text-UBtitles leading-normal text-2xl">
              {project.nameProject}
            </strong>
            </p>

            <h4 className="mt-48 h4 mb-10">Funding Agencies</h4>
            <p className="p xsm:pr-1 md:pr-16 ">{project.fundingAgency}</p>

            <hr className="mt-28 mb-12 border border-t-UBtitles xsm:max-w-[320px] max-w-[450px]" />



            <div className=" mb-11 xsm:pr-3">
              <img
                loading="lazy"
                src={`/MBE1271/img/projects/${project.imageID_ex1}.webp`}
                alt={`Image related to the project`}
                className="xsm:max-w[100px] md:max-w-[450px] md:w-full md:h-auto rounded-md"
              />
            </div>
          </motion.div>
        </div>

        {/* Columna central */}
        <div className="sm:bt-20 xsm:p-0 mr-5 xsm:mt-20 md:mt-0 ">
          <motion.div
            className="sticky top-0 xsm:p-3 lg:pl-16"
            style={{ y }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            <img
              loading="lazy"
              src={`/MBE1271/img/projects/${project.imageID_logo}.webp`}
              alt={`Image of the ${project.acronym} project`}
              className="max-w-[400px] w-full h-auto rounded-md"
            />
            

            <hr className="mt-20 mb-2 max-w-[400px]" />
            <h4 className="h4 mt-13 ">Period</h4>
            <p className="p mt-5">
              {project.start} - {project.end}
            </p>
            

            <hr className="mt-20 border-t border-UBfoothead mb-2 xsm:max-w-[300px] max-w-[300px]" />
            <h4 className="h4 mt-13 ">PI of the Project</h4>
            <p className="p mt-5">
              <strong>{project.piproject}</strong>
            </p>


            <hr className="mt-20 border-t border-UBfoothead mb-2 max-w-32" />
            {project.websiteProject &&
              project.websiteProject.trim() !== "" ? (
              <a href={project.websiteProject} target="_blank" rel="noopener noreferrer">
                <span className="p hover:text-blue-600">Visit full website of the project </span>
              </a>
            ) : null}





            <div className="flex gap-6  ">
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
                  <FaInstagram size={30} className="mt-5"/>
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>

        {/* Columna derecha (contenido largo sin scroll interno) */}
        <div className=" md:p-4 md:mt-0 xsm:mt-20 xsm:p-3">
          {[...Array(1)].map((_, i) => (
            <p key={i} className="p text-justify text-gray-800 leading-relaxed xsm:mt-5 md:mt-0 prose prose-lg ">
              {project.summary}
            </p>
          ))}
        </div>

      </div>
      {/* Columna derecha (contenido largo sin scroll interno) */}
      <div className="mt-16 5xl:mt-16
          mb-20 mx-auto           xsm:max-w-screen-xsm 
          sm:max-w-screen-sm 
          md:max-w-screen-md
          lg:max-w-screen-xl
          xl:max-w-screen-2xl
          4xl:max-w-screen-4xl
          5xl:max-w-screen-5xl   ">

        <h4 className="h4 mb-6 mt-32 xsm:p-3">Funding Agencies</h4>



        <div className="w-full flex justify-start xsm:p-3">
          <picture>
            <source
              src={`/MBE1271/img/projects/${project.imageID_FunAgen}.webp`}
              type="image/webp"
            />
            <source
              src={`/MBE1271/img/projects/${project.imageID_FunAgen}.jpg`}
              type="image/jpeg"
            />
            <img
              loading="lazy"
              src={`/MBE1271/img/projects/${project.imageID_FunAgen}.webp`}
              alt={`Logo of ${project.fundingAgency}`}
              className="max-h-52 w-auto object-contain"
            />
          </picture>
        </div>

      </div>
    </>
  );
};

export default FullDescription;
