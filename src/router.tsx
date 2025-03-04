import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";

import IndexPage from "./views/IndexView";
// import HomePage 	from './views/HomeView'	;
import PeoplePage from "./views/PeopleView";
import ProjectsPage from "./views/ProjectsView";
import GroupPage from "./views/GroupsView";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}




function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="People" element={<PeoplePage />} />
          <Route path="Projects" element={<ProjectsPage />} />
          <Route path="Groups" element={<GroupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
