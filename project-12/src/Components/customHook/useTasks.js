import { useEffect, useReducer } from "react";


const TaskReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_TAREA":
      return [...state, action.payload];
    case "ELIMINAR_TAREA":
      return state.filter((task) => task.id !== action.payload);
    case "CARGAR_TAREAS":
      return action.payload || [];
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
  
 return { tasks, addTask, deleteTask }
}

export default useTasks