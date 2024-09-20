import { Route, Routes } from "react-router-dom"
import TaskList from "./pages/TaskList/TaskList"
import TaskForm from "./pages/TaskForm/TaskForm"
import Header from "./Components/Header/Header"
import TaskItem from "./Components/TaskItem/TaskItem"
import { TaskProvider } from "./Components/TaskContext/TaskContext"

function App() {


  return (
    <TaskProvider>
    <div className="h-svh">
    <Header />
    <Routes>
    <Route path="/" element={<TaskList />} />
    <Route path="/project/:id" element={<TaskList />} />
    <Route path="/task/:id" element={<TaskItem />} />
    <Route path="/new-task" element={<TaskForm />} />
    </Routes>
    </div>
    </TaskProvider>
    
  )
} 

export default App
