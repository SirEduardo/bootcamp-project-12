import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../Components/TaskContext/TaskContext";

const TaskForm = () => {

  const { addTask } = useContext(TaskContext)

  const [formValues, setFormValues] = useState({
    title:"",
    tag: "",
    priority: "",
    date: "",
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = { 
      ...formValues,
      id: Date.now(),  
    }
    addTask(newTask)
  
    setFormValues({
      title: '',
      tag: '',
      priority: 'baja',
      date: '',
    })
    navigate("/")
  }

  return (
    <div className="h-svh bg-slate-300 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col bg-slate-400 py-10 px-12 rounded gap-2">
        <label htmlFor="title">Titulo: </label>
        <input className="rounded py-1" 
        type="text" 
        id="title"
        name="title"
        value={formValues.title}
        onChange={handleChange}
        required
         />
        <label htmlFor="tag">Tag: </label>
        <select 
        className="rounded py-1"
        id="tag"
        name="tag"
        value={formValues.tag}
        onChange={handleChange}
        required
        >
          <option value="">---</option>
          <option value="compra">Compra</option>
          <option value="limpieza">Limpieza</option>
          <option value="trabajo">Trabajo</option>
          <option value="ejercicio">Ejercicio</option>
        </select>
        <label htmlFor="priority">Prioridad: </label>
        <select 
        className="rounded py-1"
        id="priority"
        name="priority"
        value={formValues.priority}
        onChange={handleChange}
        required
        >
        <option value="">---</option>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
        <label htmlFor="date">Fecha límite: </label>
        <input 
        className="rounded py-1" 
        type="date" 
        id="date"
        name="date"
        value={formValues.date}
        onChange={handleChange}
        required
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 rounded">Crear Tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;
