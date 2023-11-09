import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="flex gap-4 justify-around flex-wrap bg-black text-white text-xl py-4">
            <NavLink to="/" className={({ isActive }) => isActive ? "hover:underline underline" : "hover:underline"}>
                Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "hover:underline underline" : "hover:underline"}>
                About
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "hover:underline underline" : "hover:underline"}>
                Profile
            </NavLink>
        </nav>
    )
}