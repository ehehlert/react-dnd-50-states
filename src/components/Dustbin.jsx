import { ItemTypes } from "./Constants";
import { useDrop } from "react-dnd";

export default function Dustbin() {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop: () => alert("dropped!"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    // dependency array
    []
  );

  return (
    <div
      ref={drop}
      className={`border border-dashed border-gray-400 ${
        isOver ? "text-yellow-500" : "text-red-500"
      } bg-gray-200 p-4 mr-2 mb-2 w-36 h-36 flex items-center justify-center`}
    >
      DROP HERE
    </div>
  );
}
