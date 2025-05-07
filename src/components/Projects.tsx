import { Fragment } from "react/jsx-runtime";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";


function ProjectComp() {
  return (
    <Fragment>
      <Card
        className="max-w-sm bg-green-50"
        renderImage={() => (
          <img
	  // src={`img/projects/${prop.dataMember.imageID}.jpg`}
            // alt={`Photo of ${prop.dataMember.name} `}
	    src="img/projects/logo_acidomic2.jpg"
                alt="Logo del Proyecto"
                className="w-full h-auto"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Proyecto de Biotecnología Avanzada
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Investigación sobre enzimas modificadas para tratamientos enzimáticos avanzados.
            </p>
            <div className="mt-4">
            <Link to="/Contact">
                <Button>
                  Ver más
                </Button>
              </Link>
            </div>
          </Card>
          </Fragment>
        );
      }

export default ProjectComp;
