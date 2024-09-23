import { Droppable } from "../../Components/Droppable/Droppable";
import { TaskCards } from "../../Components/TaskCards/TaskCards";

export const TaskSection = ({ title, tasks, status, color, updateTaskStatus, deleteTask }) => (
    <div className="flex flex-col pl-3 gap-5 pt-10 text-center min-w-72">
      <h2 className={`text-4xl border-b-2 ${color}`}>
        {title}
      </h2>
      <Droppable status={status} onDrop={updateTaskStatus}>
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No hay tareas {title.toLowerCase()}</p>
        ) : (
          tasks.map((task) => (
            <TaskCards
              key={task.id}
              task={task}
              onDelete={() => deleteTask(task.id)}
            />
          ))
        )}
      </Droppable>
    </div>
  );