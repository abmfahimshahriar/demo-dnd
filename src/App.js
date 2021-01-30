import React, { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
  },
  {
    id: "cato",
    name: "Little Cato",
  },
  {
    id: "kvn",
    name: "KVN",
  },
  {
    id: "mooncake",
    name: "Mooncake",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
  },
];

const finalSpaceCharacters2 = [
  {
    id: "gary2",
    name: "Gary Goodspeed",
  },
  {
    id: "cato2",
    name: "Little Cato",
  },
  {
    id: "kvn3",
    name: "KVN",
  },
  {
    id: "mooncake4",
    name: "Mooncake",
  },
  {
    id: "quinn5",
    name: "Quinn Ergon",
  },
];

const data = [finalSpaceCharacters,finalSpaceCharacters2];

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [characters2, updateCharacters2] = useState(finalSpaceCharacters2);

  function handleOnDragEnd(result) {
    console.log(result);

    if (!result.destination) return;
    console.log(characters);
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
    console.log(items);


    // if (!result.destination) return;
    // console.log(characters2);
    // const items2 = Array.from(characters2);
    // const [reorderedItem2] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem2);

    // updateCharacters2(items2);
    // console.log(items2);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          
          <Droppable droppableId="characters2">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters2.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      <p>
        Images from{" "}
        <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">
          Final Space Wiki
        </a>
      </p>
    </div>
  );
}

export default App;
