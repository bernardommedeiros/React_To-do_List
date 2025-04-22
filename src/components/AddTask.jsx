import { useState } from 'react';


function AddTasks({onTaskSubmit}){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    return (
        <div className=" bg-slate-200 space-y rounded-md p-6 shadow flex flex-col gap-3">

        <input type="text" placeholder="Digite o título da tarefa" className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />

        <input type="text" placeholder="Digite a descrição da tarefa" className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
        />


        <button onClick={() => {
            // trim desconsidera espaços em brancos
            if (!title.trim() || !desc.trim()) {
                return alert("A atividade não foi adicionada.")
            }
            onTaskSubmit(title, desc);
            setTitle("");
            setDesc("");

        }} className="bg-slate-500 text-white font-medium px-4 py-2 rounded-md"> Adicionar </button>

            
        </div>
    );
}

export default AddTasks;