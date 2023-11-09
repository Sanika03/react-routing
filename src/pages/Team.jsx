import { useParams } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export const Team = () => {
    const { teamId } = useParams();

    return (
        <div>
            <NavBar/>
            <h2 className="text-center py-20 text-black text-4xl font-bold bg-slate-400 mt-10">
                This is Team Sub Page with id as <span className="text-orange-700 underline">{teamId}</span>.
            </h2>
        </div>
    )
}