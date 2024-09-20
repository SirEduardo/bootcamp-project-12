import {  useContext } from "react";
import { TaskCards } from "../../Components/TaskCards/TaskCards";
import { TaskContext } from "../../Components/TaskContext/TaskContext";


const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext)

  if (!Array.isArray(tasks)) {
    return <p className="text-center text-gray-500">Error: Las tareas no se han cargado correctamente.</p>;
  }

  return (
    <div className="h-svh bg-slate-300 flex justify-center gap-5 pt-10">
    {tasks.length === 0 ? (
      <p className="text-center text-gray-500">No hay tareas disponibles</p>
    ) : (
      tasks.map((task) => (
        <TaskCards
          key={task.id}
          title={task.title}
          tag={task.tag}
          priority={task.priority}
          date={task.date}
          onDelete={() => deleteTask(task.id)}
        />

      ))
    )}
    
    </div>
  );
};

export default TaskList;
