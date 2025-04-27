import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import TaskPage from './pages/TaskPage'; 
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Tarefa não encontrada!</h1>,
  },
  {
    path: "/task",
    element: <TaskPage />,
    errorElement: <h1>Tarefa não encontrada!</h1>,
  },
]

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
