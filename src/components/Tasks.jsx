function Tasks(props){
    // key é unica entre itens
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map(task) => (
                <li key={task.id} className="flex">
                    {task.title}

                    <button className="bg-slate-400 text-white p-2 rounded-md ">{tasks.title}</button>
                    <button>Ver detalhes</button>
                   
                </li>
            ))}
        </ul>
    );
}


export default Tasks;
