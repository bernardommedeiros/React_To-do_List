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
  },
  {
    path: "/description",
    element: <TaskPage />,
  },
]

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
