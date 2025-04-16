import { ChevronRightIcon, TrashIcon } from "lucide-react";
//  todo componente recebe por padrão o props - conteudo enviado pelo app
function Tasks(props){
    // key é unica entre itens
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {/* map recebe cada task da interação */}
 
            {props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
            <button onClick={() => props.onTaskClick(task.id)} 
            className= {`bg-slate-400 w-full text-left text-white p-2 rounded-md}
            ${task.isCompleted && "line-through"}`}>
                
                {task.title}

            </button>

                <button className="bg-slate-400 p-2 text-white rounded-md}">
                    <ChevronRightIcon></ChevronRightIcon>
                </button>

                <button onClick={() => props.onDeleteClick(task.id)} className="bg-slate-400 p-2 text-white rounded-md}">
                  <TrashIcon />
            </button>
            </li>
            )
            

            )}

        </ul>
        
    );
}


export default Tasks;
