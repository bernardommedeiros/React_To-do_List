import { useState } from 'react';
import Input from "./Input"


function AddTasks({onTaskSubmit}){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    return (
        <div className=" bg-pink-200 space-y rounded-md p-6 shadow flex flex-col gap-3">


        
        <Input type="text" placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />



        <Input type="text" placeholder="Digite a descrição da tarefa"
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

        }} className="bg-pink-300 text-white font-medium px-4 py-2 rounded-md"> Adicionar </button>

            
        </div>
    );
}

export default AddTasks;