import { useParams } from "react-router-dom"

export const Company = () => {
    const { companyId } = useParams();
    return (
        <div>
            <h2 className="text-center py-20 text-black text-4xl font-bold bg-slate-400 mt-10">
                This is Company Sub Page with id as <span className="text-orange-700 underline">{companyId}</span>.
            </h2>
        </div>
    )
}