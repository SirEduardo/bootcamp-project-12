import { createContext } from "react";
import useTasks from "../customHook/useTasks";

export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {

  const { tasks, addTask, deleteTask } = useTasks();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
