import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/profile");
    }

    return (
        <div className="text-center font-bold bg-slate-400 py-20">
            <h2 className=" text-black text-4xl font-bold bg-slate-400">
                Click button to login
            </h2>
            <button onClick={() => handleLogin()} className="bg-blue-800 text-white p-4 font-bold text-xl mt-10 rounded-2xl hover:opacity-50">Login</button>
        </div>
    )
}