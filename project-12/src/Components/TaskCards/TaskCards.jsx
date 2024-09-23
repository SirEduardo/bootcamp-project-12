import { useDrag } from "react-dnd";


const capitalize = (str) => {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}


export const TaskCards = ({ task,  onDelete }) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const FormattedDate = task.date ? new Date(task.date).toLocaleDateString("es-ES") : "Sin fecha"

  return (
    <div ref={drag} className={`bg-blue-800 text-white w-72 h-36 rounded-2xl flex flex-col items-center relative gap-2 mb-6 cursor-pointer ${
      isDragging ? "opacity-50" : "opacity-100"
    }`}>
      <div className="flex justify-around w-full mt-7">
        <p className="text-purple-500">{capitalize(task.tag)}</p>
        <p className={`${task.priority === "alta" ? "text-red-500" : task.priority === "media" ? "text-yellow-500" : "text-green-500" }`}>Prioridad: {capitalize(task.priority)}</p>
      </div>
      <h3>{capitalize(task.title)}</h3>
      <p> Fecha: {FormattedDate}</p>
      <button onClick={onDelete} className="absolute top-2 right-2 text-red-500">X</button>
    </div>
  );
};
