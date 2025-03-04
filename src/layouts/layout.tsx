import { Outlet } from "react-router-dom";
import HeaderComp from "../components/Header";
import { Fragment } from "react/jsx-runtime";
import FooterComp from "../components/Footer";

function Layout() {
  return (
    <Fragment>
      <div className="flex flex-col min-h-screen">
        <HeaderComp />
        <main className="container mx-auto py-16 flex-grow">
          <Outlet />
        </main>
        <FooterComp />
      </div>
    </Fragment>
  );
}

export default Layout;
