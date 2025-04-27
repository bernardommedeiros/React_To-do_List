import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import { useState } from 'react';
import {v4} from 'uuid'

function App(){
  // prop
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "estudar react",
    description: " aprender o framework JS ",
    isCompleted: false
  },
  {
    id: 2,
    title: "estudar django",
    description: " aprender o framework PY ",
    isCompleted: false
  },

  {
    id: 3,
    title: "estudar spring",
    description: " aprender o framework JAVA ",
    isCompleted: false
  }
]);

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
    <div className='w-screen h-screen bg-slate-600 flex justify-center p-6'>

      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center" >Gerenciador de Tarefas</h1>
        
        <AddTask onTaskSubmit={onTaskSubmit}/>

        <Tasks tasks = {tasks} onTaskClick ={onTaskClick} onTaskDelete = {onTaskDelete}
        />
        
      </div>
    </div>
  );
}

export default App;
;
