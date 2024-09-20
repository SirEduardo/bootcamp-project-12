const capitalize = (str) => {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const TaskCards = ({ title, tag, priority, date, onDelete }) => {

  const FormattedDate = date ? new Date(date).toLocaleDateString("es-ES") : "Sin fecha"

  return (
    <div className="bg-white w-72 h-36 rounded-2xl flex flex-col items-center relative gap-2">
      <div className="flex justify-around w-full mt-7">
        <p className="text-purple-500">{capitalize(tag)}</p>
        <p className={`${priority === "alta" ? "text-red-500" : priority === "media" ? "text-yellow-500" : "text-green-500" }`}>Prioridad: {capitalize(priority)}</p>
      </div>
      <h3>{capitalize(title)}</h3>
      <p> Fecha máxima: {FormattedDate}</p>
      <button onClick={onDelete} className="absolute top-2 right-2 text-red-500 bg-slate-900 px-1">X</button>
    </div>
  );
};
