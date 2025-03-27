import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App(){
  const [tasks, setTask] = useState([
    { id: 1, 
      title: 'Estudar Programação',
      description: "Estudar React",
      isCompleted: false 
    },
    { id: 2, 
      title: 'Estudar Front-End',
      description: "Estudar HTML", 
      isCompleted: false 
    },
    { id: 3, 
      title: 'Estudar back-End',
      description: "Estudar Python",
      isCompleted: false 
    },
    
  ]);

  return (
    // cobre toda a largura da tela
    <div className='w-screen h-screen bg-slate-300 flex justify-center p-6'>
      <div className='w-[500px]'>

        <h1 className="text-3xl font-bold text-center" >Gerenciador de Tarefas</h1>

        <AddTask />
        {/* passando props */}
        <Tasks tasks ={tasks}/> 

      </div>
    </div>
  )
}

export default App;
