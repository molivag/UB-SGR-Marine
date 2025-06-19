// import { Outlet } from "react-router-dom";
// import { Fragment } from "react/jsx-runtime";
import HeaderComp               from "../components/Header";
import FooterComp               from "../components/Footer";
import GoTop                    from "../components/BackToTop";
import HeaderSwip               from "../components/HeaderSwip.tsx";
import { Fragment }             from "react";
import { Outlet, useLocation }  from "react-router-dom";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Fragment>
      <div className="flex flex-col min-h-screen">
        {isHome && <HeaderSwip />} {/* Carrusel solo en / */}
        <HeaderComp /> {/* Menú siempre visible, ahora después del carrusel */}
        <main className="container mx-auto py-16 flex-grow">
          <Outlet />
        </main>
        <FooterComp />
      </div>

      <GoTop />
    </Fragment>
  );
}

export default Layout;

