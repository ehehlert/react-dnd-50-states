import { Droppable, Draggable } from "react-beautiful-dnd";

function StateBox({ name, id, trueMatch }) {
  return (
    <div>
      <h2>{name}</h2>
      <Droppable droppableId={id} type="mapping">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div
              className={`h-36 flex text-4xl justify-center items-center text-center p-2 col-span-1 border border-dashed ${
                trueMatch === true
                  ? "bg-green-500"
                  : trueMatch === false
                  ? "bg-red-500"
                  : "border-gray-600"
              }`}
            ></div>
          </div>
        )}
      </Droppable>
    </div>
  );
}

function DropBox() {
  return (
    <Droppable droppableId={"testID"} type="mapping">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="h-36 flex text-4xl justify-center items-center text-center p-2 col-span-1 border border-dashed border-gray-600"
        ></div>
      )}
    </Droppable>
  );
}

function renderStateBoxes(statesBoxes) {
  return statesBoxes.map((stateBox, index) => (
    <StateBox
      key={stateBox.id}
      id={stateBox.id}
      name={stateBox.state}
      trueMatch={stateBox.trueMatch}
    />
  ));
}

export default function DestinationList({ statesBoxes }) {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 auto-rows-min">
        {renderStateBoxes(statesBoxes)}
      </div>
    </div>
  );
}
