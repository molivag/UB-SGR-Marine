import { Outlet } from "react-router-dom";
import HeaderComp from "../components/Header";
import { Fragment } from "react/jsx-runtime";
import FooterComp from "../components/Footer";
import GoTop from "../components/BackToTop";

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
      <GoTop/>
    </Fragment>
  );
}

export default Layout;
