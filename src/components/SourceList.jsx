import { Droppable, Draggable } from "react-beautiful-dnd";

export default function SourceList({ capitalsList }) {
  return (
    <div>
      <Droppable droppableId="capitalsList" type="mapping">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {capitalsList.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="border border-black p-2 mb-2"
                  >
                    {item.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
