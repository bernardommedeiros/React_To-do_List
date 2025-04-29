import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from '../components/Title'

function TaskPage(){
    const navigate = useNavigate();
    // hook para informações na url de titulo e descricao
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const desc = searchParams.get("desc");
    return (
        <div className="w-screen h-screen flex justify-center bg-slate-600 p-6 pt-10"> 
            <div className="w-[500px] space-y-4">

            <div className="flex justify-center relative">
                {/* (-1) -> url anterior */}
                <button onClick={() => navigate(-1)} className="absolute left-0 bottom-0 mb-6 text-slate-100">
                    <ChevronLeftIcon />
                </button>
                
                <Title>Detalhes da Tarefa</Title>
            </div>

            <div className="bg-slate-200 p-4 rounded-md" >
                <h2 className="text-xl text-slate-700 font-bold pb-3" >{title}</h2>
                <p className="text-slate-600">{desc}</p>
            </div>

  
</div>
</div>
         
    
    ) 
}

export default TaskPage;