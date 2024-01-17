import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SourceList from "./SourceList";
import DATA from "./MockData";

export default function Grid() {
  const [capitalsList, setCapitalsList] = useState(DATA);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const newCapitalsList = [...capitalsList];
      const [removed] = newCapitalsList.splice(source.index, 1);
      newCapitalsList.splice(destination.index, 0, removed);
      setCapitalsList(newCapitalsList);
    }
  };

  return (
    <div className="p-1">
      <DragDropContext onDragEnd={handleDragDrop}>
        <div
          data-identifier="main-card"
          className="rounded-lg shadow-md grid grid-cols-3 gap-4 p-4 bg-white border border-black"
        >
          <div className=" bg-blue-300 p-4">
            <h2>Capitals</h2>
            <SourceList capitalsList={capitalsList} />
          </div>
          <div className=" bg-blue-200 p-4 col-span-2">
            <h2>States</h2>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
