import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import { useEffect, useState } from 'react';
import {v4} from 'uuid'
import Title from './components/Title'

function App(){
  // prop
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []
  // caso não haja nada no localStorage é passado uma lista vazia
);
 
function onTaskSubmit(title, desc) {
  const newTask = {
    // gera id aleatorio
    id: v4(),
    title: title,
    desc: desc,
    isCompleted: false,
  };
  // indica que haverá todos os anteriores e a nova adição
  setTasks([ ...tasks, newTask])

}




useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks])




// ROTA FICTICIA, FUNCIONAL MAS UTILIZADA COMO EXEMPLO -> SERVE PARA PERSISTIR OS DADOS NO BANCO DE DADOS DO PROJETO

// executa a função sempre que o valor presente na lista for alterado
// quando tasks for alterado, ocorrerá o useEffects
// efeito quando algo for alterado
// consumo da api JSONPlaceholder -> pegar os dados e armazená-los no state


 /* 
 caso habilite, a api será consumida

 useEffect(() => {
  async function fetchTasks(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      method: 'GET'
    });
    
    const data = await response.json()
    setTasks(data)

  }

  
   fetchTasks(); 
}, []); */





function onTaskClick(taskId) {
  const newTasks = tasks.map( task => {
    if (task.id === taskId) {
      return { ...task, isCompleted: !task.isCompleted };
    }

    return task;
  });

  setTasks(newTasks);
}

function onTaskDelete(taskId) {
  const newTasks = tasks.filter((task) => task.id !== taskId)
  setTasks(newTasks);
    
}


  return (
    // w e h screen cobre toda a largura da tela
      <div className='min-h-screen w-screen bg-slate-600 flex justify-center p-6'>
        <div className="w-[500px] space-y-4">
          <Title>Gerenciador de Tarefas</Title>
      
          <AddTask onTaskSubmit={onTaskSubmit}/>
          <Tasks tasks = {tasks} onTaskClick ={onTaskClick} onTaskDelete = {onTaskDelete}
          />
      
        </div>
      </div>
   
  );
}

export default App;
;
