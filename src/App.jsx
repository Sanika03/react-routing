import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Company } from "./pages/Company";
import { Team } from "./pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> 
  },
  {
    path: "/about",
    element: <About/>,
    children: [
      {
        path: "company",
        element: <Company/>
      }
    ] 
  },
  {
    path: "/profile",
    element: <Profile/> 
  },
  {
    path: "/about/team",
    element: <Team/>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
