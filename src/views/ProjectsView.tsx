import { Fragment } from "react/jsx-runtime";

function ProjectsPage() {

  return (

    <Fragment>
      <div className=" container ">
        <h1 className="my-8 text-center text-2xl font-bold "> Color Palette </h1>
        <div className="grid grid-cols-5 grid-rows-1 gap-4">
          <div className="py-5 text-center bg-UBfothead text-white">Header y Footer</div>
          <span className="py-5 text-center bg-UBtitles">Titles</span>
          <span className="py-5 text-center bg-UBnone">?</span>
          <span className="py-5 text-center bg-UBfonde">Fondo</span>
          <span className="py-5 text-center bg-UBhover">Hover</span>
        </div>
      </div>
    </Fragment>
  );
}
export default ProjectsPage;
