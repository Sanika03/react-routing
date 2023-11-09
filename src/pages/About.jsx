import { NavLink } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { Outlet } from "react-router-dom";

export const About = () => {
    return (
        <div>
            <NavBar/>
            <div className="text-3xl font-bold underline flex gap-10 justify-center py-4">
                <NavLink to="/about/team/1" className="hover:opacity-50">Team</NavLink>
                <NavLink to="/about/company/1" className="hover:opacity-50">Company</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}