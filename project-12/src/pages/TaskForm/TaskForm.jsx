import { useContext, useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../Components/TaskContext/TaskContext";

const TaskForm = () => {
  console.log("soy el formulario y me renderizo");

  const { addTask } = useContext(TaskContext);
  const titleId = useId();
  const tagId = useId();
  const priorityId = useId();
  const dateId = useId();

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    title: "",
    tag: "",
    priority: "",
    date: "",
    status: "not_started",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...formValues,
      id: Date.now(),
    };
    addTask(newTask);

    setFormValues({
      title: "",
      tag: "",
      priority: "baja",
      date: "",
    });
    navigate("/");
  };

  return (
    <div className="h-svh bg-slate-300 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-slate-400 py-10 px-12 rounded gap-2"
      >
        <label htmlFor={titleId}>Titulo: </label>
        <input
          className="rounded py-1"
          type="text"
          id={titleId}
          name="title"
          value={formValues.title}
          onChange={handleChange}
          required
        />
        <label htmlFor={tagId}>Tag: </label>
        <select
          className="rounded py-1"
          id={tagId}
          name="tag"
          value={formValues.tag}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona el Tag</option>
          <option value="compra">Compra</option>
          <option value="limpieza">Limpieza</option>
          <option value="trabajo">Trabajo</option>
          <option value="ejercicio">Ejercicio</option>
        </select>
        <label htmlFor={priorityId}>Prioridad: </label>
        <select
          className="rounded py-1"
          id={priorityId}
          name="priority"
          value={formValues.priority}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona la prioridad</option>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
        <label htmlFor={dateId}>Fecha límite: </label>
        <input
          className="rounded py-1"
          type="date"
          id={dateId}
          name="date"
          value={formValues.date}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 rounded"
        >
          Crear Tarea
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
