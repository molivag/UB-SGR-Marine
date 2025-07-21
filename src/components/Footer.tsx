import { Link } from "react-router-dom";

function FooterComp() {
  return (
    <footer className="px-4 divide-y bg-UBfoothead text-UBtitles">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/2">
          <a
            rel="noopener noreferrer"
            href="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400"> */}
            {/*   <svg */}
            {/*     xmlns="http://www.w3.org/2000/svg" */}
            {/*     viewBox="0 0 32 32" */}
            {/*     fill="currentColor" */}
            {/*     className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900" */}
            {/*   > */}
            {/*     <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path> */}
            {/*   </svg> */}
            {/* </div> */}
            <img
              src="/MBE1271/img/logoSGRMBE.png"
              className="w-auto xsm:h-12 rounded-md mr-3 sm:h-20 md:h-24 mx-10 xsm:mx-0 lg:mx-10"
              alt="footer of SGR MBE"
            />
            <h5 className="h5 text-UBtitles text-wrap break-normal">SGR Marine Biodiversity and Evolution</h5>
          </a>
        </div>
        <div className="grid grid-cols-3  text-sm gap-x-2 gap-y-8 lg:w-2/3 sm:grid-cols-3">
          {/* <div className="space-y-3"> */}
          {/*   <h3 className="tracking-wide uppercase text-gray-50">The UB</h3> */}
          {/*   <ul className="space-y-1"> */}
          {/*     <li> */}
          {/*       <a rel="noopener noreferrer" href="#"> */}
          {/*         Legal Notice */}
          {/*       </a> */}
          {/*     </li> */}
          {/*     <li> */}
          {/*       <a rel="noopener noreferrer" href="#"> */}
          {/*         Coockies */}
          {/*       </a> */}
          {/*     </li> */}
          {/*   </ul> */}
          {/* </div> */}
          <div className="space-y-3 ml-44 xsm:ml-1 lg:ml-44 flex flex-col items-center">
            <h5 className="h5 text-UBtitles hidden sm:block">The Site</h5>
            <h5 className="h5 text-UBtitles sm:hidden">The Site</h5>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/People" className="hover:text-orange-500">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/Projects" className="hover:text-orange-500">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 mx-auto xsm:mx-1 lg:w-96 flex flex-col items-center">
            <h5 className="h5 text- hidden sm:block">The University of Barcelona</h5>
            <h5 className="h5 text- sm:hidden">The UB</h5>

            <ul className="space-y-1">
              <li>
                <a className="hover:text-orange-500" rel="noopener noreferrer" href="https://web.ub.edu/en/legal-notice">
                  Legal Notice
                </a>
              </li>
              <li>
                <a className="hover:text-orange-500" rel="noopener noreferrer" href="https://web.ub.edu/en/cookie-policy">
                  Coockies
                </a>
              </li>
            </ul>

            {/* <ul className="space-y-1"> */}
            {/*   <li> */}
            {/*     <a rel="noopener noreferrer" href="#"> */}
            {/*       Privacy */}
            {/*     </a> */}
            {/*   </li> */}
            {/*   <li> */}
            {/*     <a rel="noopener noreferrer" href="#"> */}
            {/*       Terms of Service */}
            {/*     </a> */}
            {/*   </li> */}
            {/* </ul> */}
          </div>
          <div className="space-y-3 lg:ml-7 lg:w-64 lg:mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center space-y-3">
            <a
                href="http://www.ub.edu/irbio/"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to irbio website"
              >
              <img
                src="./img/footer/footer1.webp"
                alt="Descripción imagen uno"
                className="w-52 h-auto"
              />
            </a>
              <a
              href="https://web.ub.edu/web/ub/"
              target="_blank"
              rel="noopener noreferrer"
              title="Enlace a sitio uno"
            >
                <img
                  src="./img/footer/foot2.webp"
                  alt="Descripción imagen uno"
                  className="w-48 h-auto"
                />
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-cyan-950 border-t-cyan-950">
        © 2025 Developed by ogmdevlab — design by committee. All rights reserved.
      </div>
    </footer>
  );
}

export default FooterComp;
