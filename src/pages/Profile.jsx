import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { NavBar } from "../components/NavBar";

export const Profile = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div className="text-center bg-slate-400">
            <NavBar/>
            <h2 className="py-20 text-black text-4xl font-bold">
                This is Profile Page
            </h2>
            <button onClick={() => handleLogout()} className="bg-blue-800 text-white p-4 font-bold text-xl rounded-2xl mb-10 hover:opacity-50">Logout</button>
        </div>
    )
}