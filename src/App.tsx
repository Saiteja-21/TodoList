import React, { useState } from "react";
import { Todo } from "./Model";

import "./App.css";
import InputBox from "./components/InputBox";
import Todos from "./components/Todos";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");

  const [todos, settodos] = useState<Todo[]>([]);
  const [completedtodos, setcompletedtodos] = useState<Todo[]>([]);

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo)
      settodos(() => [...todos, { id: Date.now(), todo, completed: false }]);
    settodo("");
  };

  const ondrag=(result:DropResult)=>{
    let temp,active=todos,completed=completedtodos
    const {source,destination}=result
    if(source.droppableId=='Todo'){
      temp=active[source.index]
      active.splice(source.index,1)

    }else{
      temp=completed[source.index]
      completed.splice(source.index)
    }
  if(destination?.droppableId=='Todo'){
    active.splice(destination.index,0,temp)
  }else{
    completed.splice(destination?.index?? 0,0,temp)
  }

  }

  return (
    <DragDropContext onDragEnd={ondrag}>
      <div className="App">
        <h1>Todo app</h1>
        <InputBox todo={todo} settodo={settodo} handlesubmit={handlesubmit} />
        <Todos
          todos={todos}
          settodos={settodos}
          completedtodos={completedtodos}
          setcompletedtodos={setcompletedtodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
