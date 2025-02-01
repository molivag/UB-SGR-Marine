import { Outlet } from "react-router-dom";
import Navigation_menu from "../components/Navigation.tsx";

function Layout() {
  return(
  <>
    <Navigation_menu/>
    <main className="container mx-auto py-16">
    <Outlet/>
    </main>
  </>
  )
	
}

export default Layout
