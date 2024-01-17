import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";

export default function Box() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`border ${
        isDragging ? "border-dashed text-red-500" : "border-solid text-blue-500"
      } bg-lightblue-200 p-4 mr-2 mb-2 w-24 h-24 flex items-center justify-center text-center`}
    >
      {isDragging ? "IM BEING DRAGGED" : "DRAG ME"}
    </div>
  );
}
