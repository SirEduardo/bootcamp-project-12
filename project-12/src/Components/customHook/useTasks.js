import { useEffect, useReducer } from "react";


const TaskReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_TAREA":
      return [...state, action.payload];
    case "ELIMINAR_TAREA":
      return state.filter((task) => task.id !== action.payload);
    case "CARGAR_TAREAS":
      return action.payload || [];
      case "ACTUALIZAR_ESTADO_AREA":
        return state.map((task) =>
          task.id === action.payload.id
        ? { ...task, status: action.payload.status }
        : task 
        )
    default:
      return state;
  }
};
const useTasks = () => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);

useEffect(() => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks)
    dispatch({ type: "CARGAR_TAREAS", payload: parsedTasks });
  }
}, []);
const addTask = (task) => {
  dispatch({ type: "AGREGAR_TAREA", payload: task });
};

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

const deleteTask = (id) => {
  dispatch({ type: "ELIMINAR_TAREA", payload: id });
};

const updateTaskStatus = (id, status) => {
  dispatch({ type: "ACTUALIZAR_ESTADO_AREA", payload: { id, status } })
}
  
 return { tasks, addTask, deleteTask, updateTaskStatus }
}

export default useTasks