import { useContext } from "react";
import { TaskContext } from "../../Components/TaskContext/TaskContext";
import { TaskSection } from "../../Components/TaskSection/TaskSection";

const TaskList = () => {
  
  const { tasks, deleteTask, updateTaskStatus } = useContext(TaskContext);

  if (!Array.isArray(tasks)) {
    return (
      <p className="text-center text-gray-500">
        Error: Las tareas no se han cargado correctamente.
      </p>
    );
  }

  const notStartedTasks = tasks.filter((task) => task.status === "not_started");
  const inProgressTasks = tasks.filter((task) => task.status === "in_progress");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="min-h-screen bg-slate-300 flex justify-around gap-5 pt-10 pb-10 max-lg:flex-col max-lg:items-center">
      <TaskSection
        title="Tareas"
        tasks={notStartedTasks}
        status="not_started"
        color="border-black"
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
      <TaskSection
        title="Tareas en Progreso"
        tasks={inProgressTasks}
        status="in_progress"
        color="border-yellow-600 text-yellow-600"
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
      <TaskSection
        title="Tareas Completadas"
        tasks={completedTasks}
        status="completed"
        color="border-green-500 text-green-500"
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskList