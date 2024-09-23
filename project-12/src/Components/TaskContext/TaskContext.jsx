import { createContext } from "react";
import useTasks from "../customHook/useTasks";

export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {

  const { tasks, addTask, deleteTask, updateTaskStatus } = useTasks();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
 