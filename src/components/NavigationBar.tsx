import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

function MenuBar() {
  const location = useLocation(); // Obtiene la ruta actual

  // Función para aplicar estilos a los enlaces
  // const getLinkClass = (path: string) =>
  //   location.pathname === path
  //     ? "uppercase font-bold text-xl text-UBfondo px-3 py-2 "
  //     : "uppercase font-bold text-xl text-UBfondo";

  const getLinkClass = (path: string) =>
    `uppercase gap-10 font-bold text-xl text-UBtitles px-3 py-2 transition-transform duration-500 hover:scale-125 ${location.pathname === path || location.pathname.startsWith(path + "/") ? 'underline' : ''
    }`;
  return (



















    //    <Navbar
    //  fluid
    //  rounded
    //  className="bg-UBfoothead text-UBtitles py-5 px-4 sm:px-6 md:px-10"
    //>
    //  {/* Contenedor del logo, título y hamburguesa */}
    //  <div className="w-full flex items-center justify-between">
    //    <div className="flex items-center space-x-3 min-w-0">
    //      <img
    //        src="/MBE1271/img/logoSGRMBE.png"
    //        className="w-12 h-auto rounded-md"
    //        alt="Logo of SGR MBE Lab"
    //      />
    //      <span className="text-UBfondo text-sm xsm:text-base sm:text-lg md:text-xl font-semibold truncate">
    //        SGR Marine Biodiversity and Evolution
    //      </span>
    //    </div>
    //
    //    {/* Botón hamburguesa a la derecha */}
    //    <div className="ml-auto flex-shrink-0">
    //      <Navbar.Toggle />
    //    </div>
    //  </div>
    //
    //  {/* Menú colapsable */}
    //  <Navbar.Collapse className="justify-end">
    //    <Navbar.Link as={Link} to="/" className={getLinkClass("/")}>
    //      Home
    //    </Navbar.Link>
    //    <Navbar.Link as={Link} to="/People" className={getLinkClass("/People")}>
    //      TEAM
    //    </Navbar.Link>
    //    <Navbar.Link as={Link} to="/Projects" className={getLinkClass("/Projects")}>
    //      Projects
    //    </Navbar.Link>
    //  </Navbar.Collapse>
    //</Navbar>
    //









    <div className="
       mx-auto w-full 
       xsm:max-w-screen-xsm 
       sm:max-w-screen-sm 
       md:max-w-screen-md 
       lg:max-w-screen-xl 
       xl:max-w-screen-2xl">
      <Navbar fluid rounded className="bg-UBfoothead text-UBtitles py-5 px-4">

        <div className="w-full flex items-center justify-between">
          {/* Logo + Título */}
          <div className="flex items-center space-x-3 min-w-0">
            <img
              src="/MBE1271/img/logoSGRMBE.png"
              className="w-14 h-auto rounded-md"
              alt="Logo of SGR MBE Lab"
            />
            <span className="lg:text-3xl text-UBtitles text-sm xsm:text-base sm:text-lg md:text-xl font-semibold break-normal whitespace-normal text-center">
              SGR Marine Biodiversity and Evolution
            </span>

            {/* <span className="text-UBfondo text-sm xsm:text-base sm:text-lg md:text-xl font-semibold truncate"> */}
            {/* SGR Marine Biodiversity and Evolution */}
            {/* </span> */}
          </div>

          {/* Botón hamburguesa en móviles */}
          <div className="flex-shrink-0 block lg:hidden">
            <Navbar.Toggle />
          </div>

          {/* Menú en pantallas grandes */}
          <div className="hidden lg:flex items-center space-x-6 list-none">
            <Navbar.Link as={Link} to="/" className={getLinkClass("/")}>
              <p className="lg:text-2xl">Home</p>
            </Navbar.Link>
            <Navbar.Link as={Link} to="/People" className={getLinkClass("/People")}>
              <p className="lg:text-2xl">TEAM</p>
            </Navbar.Link>
            <Navbar.Link as={Link} to="/Projects" className={getLinkClass("/Projects")}>
             <p className="lg:text-2xl"> Project</p>
            </Navbar.Link>
          </div>
        </div>

        {/* Menú colapsable para pantallas pequeñas */}
        <Navbar.Collapse className="lg:hidden">
          <Navbar.Link as={Link} to="/" className={getLinkClass("/")}>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/People" className={getLinkClass("/People")}>
            TEAM
          </Navbar.Link>
          <Navbar.Link as={Link} to="/Projects" className={getLinkClass("/Projects")}>
            Projects
          </Navbar.Link>
        </Navbar.Collapse>

      </Navbar>
    </div>
























  );
}

export default MenuBar;
