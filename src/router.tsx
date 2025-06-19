import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import IndexPage from "./views/IndexView";
// import HomePage 	from './views/HomeView'	;
import PeoplePage from "./views/PeopleView";
import ProjectsPage from "./views/ProjectsView";
import FullDescription from "./components/ProjectDescription";
import ScrollToTop from "./components/ScrollToTop";

// import ScrollLayout from "./components/Descrption2";
// import GroupPage from "./views/GroupsView";
// import ContactPage from "./views/ContactView";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function AppRouter() {
  return (
    <BrowserRouter basename="/MBE1271/">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="People" element={<PeoplePage />} />
          <Route path="Projects" element={<ProjectsPage />} />
          <Route path="Projects/:acronym" element={<FullDescription />} />
          {/* <Route path="/ScrollLayout" element={<ScrollLayout/>}/> */}
          {/* <Route path="Research" element={<GroupPage />} /> */}
          {/* <Route path="Contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
