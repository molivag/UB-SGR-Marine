import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

function MenuBar() {
  const location = useLocation(); // Obtiene la ruta actual

  // Función para aplicar estilos a los enlaces
  const getLinkClass = (path: string) =>
    location.pathname === path
      ? "uppercase font-bold text-lg text-orange-500 px-3 py-2  "
      : 
        "uppercase font-bold text-lg text-UBfondo";

  return (
    <Navbar fluid rounded className="bg-UBfoothead text-UBtitles py-5">
      <Navbar.Brand as={Link} to="/">
        <img
          src="img/TortugaBoba.png"
          className="mr-3 h-6 sm:h-9"
          alt="SGR UB Lab"
        />
        <span className="text-orange-500 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SGR UB Lab
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" className={getLinkClass("/")}>
          {/* <Navbar.Link */}
          {/*   className="uppercase font-bold text-lg text-UBfondo" */}
          {/*   as={Link} */}
          {/*   to="/" */}
          {/*   active={location.pathname === "/"} */}
          {/* > */}
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/People" className={getLinkClass("/People")}>
        {/* <Navbar.Link */}
        {/*   className="uppercase font-bold text-lg text-UBfondo" */}
        {/*   as={Link} */}
        {/*   to="/People" */}
        {/*   active={location.pathname === "/People"} */}
        {/* > */}
          TEAM
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Projects" className={getLinkClass("/Projects")}>
        {/* <Navbar.Link */}
        {/*   className="uppercase font-bold text-lg text-UBfondo" */}
        {/*   as={Link} */}
        {/*   to="/Projects" */}
        {/*   active={location.pathname === "/Projects"} */}
        {/* > */}
          Projects
        </Navbar.Link>
        {/* <Navbar.Link as={Link} to="/Research" className={getLinkClass("/Research")}> */}
        {/* <Navbar.Link */}
        {/*   className="uppercase font-bold text-lg text-UBfondo" */}
        {/*   as={Link} */}
        {/*   to="/Research" */}
        {/*   active={location.pathname === "/Research"} */}
        {/* > */}
          {/* Research */}
        {/* </Navbar.Link> */}
        {/* <Navbar.Link as={Link} to="/Contact" className={`${getLinkClass("/Contact")} mr-4`}> */}
        {/* <Navbar.Link */}
        {/*   className="uppercase font-bold text-lg text-UBfondo mr-4" */}
        {/*   as={Link} */}
        {/*   to="/Contact" */}
        {/*   active={location.pathname === "/Contact"} */}
        {/* > */}
          {/* Contact */}
        {/* </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuBar;
