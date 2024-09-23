import { useDrop } from "react-dnd"

export const Droppable = ({ status, onDrop, children }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => onDrop(item.id, status),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    return(
        <div 
        ref={drop} 
        className={`h-full w-full p-4 rounded ${isOver ? "bg-blue-200" : "bg-slate-300"}`}>
            {children}
        </div>
    )
}