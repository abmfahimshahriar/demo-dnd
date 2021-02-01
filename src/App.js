import React, { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const mainData = [
  {
    listName: "characters1",
    listArray: [
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
    ],
  },
  {
    listName: "characters2",
    listArray: [
      {
        id: "gary2",
        name: "Gary Goodspeed 2",
      },
      {
        id: "cato2",
        name: "Little Cato 2",
      },
      {
        id: "kvn3",
        name: "KVN 2",
      },
      {
        id: "mooncake4",
        name: "Mooncake 2",
      },
      {
        id: "quinn5",
        name: "Quinn Ergon 2",
      },
    ],
  },
];

function App() {
  const [data, setData] = useState(mainData);

  function handleOnDragEnd(result) {
    const tempData = [...data];
    console.log(result);

    if (!result.destination) return;
    if (result.destination.droppableId === result.source.droppableId) {
      const tempArray = tempData.find(
        (item) => item.listName === result.destination.droppableId
      );
      const dataIndex = tempData.findIndex(
        (item) => item.listName === result.destination.droppableId
      );
      const items = JSON.parse(JSON.stringify(tempArray.listArray));
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      const updatedListItem = {
        listName: tempArray.listName,
        listArray: [...items],
      };
      tempData[dataIndex] = { ...updatedListItem };
      setData(tempData);
    } else {
      // get the arrays
      const tempSourceArray = tempData.find(
        (item) => item.listName === result.source.droppableId
      );
      const tempDestinationArray = tempData.find(
        (item) => item.listName === result.destination.droppableId
      );

      // get the arrays indexes
      const dataSourceIndex = tempData.findIndex(
        (item) => item.listName === result.source.droppableId
      );
      const dataDestinationIndex = tempData.findIndex(
        (item) => item.listName === result.destination.droppableId
      );

      // update the source list
      const sourceItems = JSON.parse(JSON.stringify(tempSourceArray.listArray));
      const movedItem = { ...sourceItems[result.source.index] };
      sourceItems.splice(result.source.index, 1);
      const updatedSourceListItem = {
        listName: tempSourceArray.listName,
        listArray: [...sourceItems],
      };
      tempData[dataSourceIndex] = { ...updatedSourceListItem };

      // update the destination list
      const destinationItems = JSON.parse(
        JSON.stringify(tempDestinationArray.listArray)
      );
      destinationItems.splice(result.destination.index, 0, movedItem);
      const updatedDestinationListItem = {
        listName: tempDestinationArray.listName,
        listArray: [...destinationItems],
      };
      tempData[dataDestinationIndex] = { ...updatedDestinationListItem };

      // set the state with updated value
      setData(tempData);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="lists-container">
            {data.map((list) => {
              return (
                <div className="list-item">
                  <Droppable droppableId={list.listName} key={list.listName}>
                    {(provided) => (
                      <ul
                        className="characters"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {list.listArray.map(({ id, name, thumb }, index) => {
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
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
