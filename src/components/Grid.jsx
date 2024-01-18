import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SourceList from "./SourceList";
import { CAPITALS_DATA, STATE_DATA } from "./MockData";
import DestinationList from "./DestinationList";

export default function Grid() {
  const [capitalsList, setCapitalsList] = useState(CAPITALS_DATA);
  const [statesBoxes, setStateBoxes] = useState(STATE_DATA);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;
    console.log(results);

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "mapping") {
      // logic for moving a capitals around in the list
      if (source.droppableId === destination.droppableId) {
        const newCapitalsList = [...capitalsList];
        const [removed] = newCapitalsList.splice(source.index, 1);
        newCapitalsList.splice(destination.index, 0, removed);
        setCapitalsList(newCapitalsList);
      }
      // this logic currently does... something, and I like where it's headed
      else {
        // check if the state property of stateBoxes at this index matches the state property of the capital at this index
        const capitalBeingMatched = capitalsList.find(
          (item) => item.id === results.draggableId
        );
        const stateBeingMatched = statesBoxes.find(
          (item) => item.id === destination.droppableId
        );

        const newCapitalsList = [...capitalsList];
        const [removed] = newCapitalsList.splice(source.index, 1);
        setCapitalsList(newCapitalsList);

        const stateBeingMatchedId = stateBeingMatched.id;
        const capitalBeingMatchedId = capitalBeingMatched.id;
        const capitalBeingMatchedName = capitalBeingMatched.name;

        const newStatesBoxes = [...statesBoxes];

        const stateToBeUpdated = newStatesBoxes.find(
          (item) => item.id === stateBeingMatchedId
        );
        stateToBeUpdated.matched = true;
        stateToBeUpdated.matchedId = capitalBeingMatchedId;
        stateToBeUpdated.matchedName = capitalBeingMatchedName;

        if (capitalBeingMatched.state === stateBeingMatched.state) {
          stateToBeUpdated.trueMatch = true;
        } else {
          stateToBeUpdated.trueMatch = false;
        }

        setStateBoxes(newStatesBoxes);
        console.log(newStatesBoxes);
      }
    }

    if (destination.droppableId === "testID") {
      console.log("here is where the logic can live");
    }
  };

  return (
    <div className="p-1">
      <DragDropContext onDragEnd={handleDragDrop}>
        <div
          data-identifier="main-card"
          className="rounded-lg shadow-md flex gap-4 p-4 bg-white border border-black"
        >
          <div className=" bg-blue-300 p-4 w-1/3">
            <h2>Capitals</h2>
            <SourceList capitalsList={capitalsList} />
          </div>
          <div className=" bg-blue-200 p-4 flex-grow ">
            <h2>States</h2>
            <DestinationList statesBoxes={statesBoxes} />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
