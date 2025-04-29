import { ChevronRightIcon, TrashIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button"
//  todo componente recebe por padrão o props - conteudo enviado pelo app
function Tasks({ tasks, onTaskClick, onTaskDelete }){
    // key é unica entre itens
    const navigate = useNavigate();

    function onSeeDetails(task) {
        // trata a string para não conflitar
        const query = new URLSearchParams()
        query.set("title", task.title);
        query.set("desc", task.desc);
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {/* map recebe cada task da interação */}
 
            {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
            <button onClick={() => onTaskClick(task.id)} 
            className= {`bg-slate-400 w-full text-left text-white flex p-2 rounded-md
            ${task.isCompleted && "line-through"}`}>
                {task.isCompleted && <CheckIcon />}
                {task.title}

            </button>
                
                <Button onClick={() => onSeeDetails(task)}>
                    <ChevronRightIcon></ChevronRightIcon>
                </Button>

                <Button onClick={() => onTaskDelete(task.id)} >
                  <TrashIcon />
                </Button>
            </li>
            )
            

            )}

        </ul>
        
    );
}


export default Tasks;
