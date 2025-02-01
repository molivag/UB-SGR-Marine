import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout		from './layouts/layout'		;


import IndexPage 	from './views/IndexView';
import HomePage 	from './views/HomeView'	;
import PeoplePage 	from './views/PeopleView'	;
import ProjectsPage 	from './views/ProjectsView';

function AppRouter(  ) {
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<IndexPage />} index/>
        <Route element={<Layout/>}>
          <Route path="Home" element={<HomePage />} />
          <Route path="People" element={<PeoplePage />}/>
	  <Route path="Projects" element={<ProjectsPage/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  )

}

export default AppRouter
