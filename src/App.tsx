import React, { useState } from 'react';
import { Todo } from './Model';

import './App.css';
import InputBox from './components/InputBox';
import Todos from './components/Todos'; 



const App:React.FC=()=> {
  const [todo,settodo]=useState<string>("")

  const [todos,settodos]=useState<Todo[]>([]) 

  const handlesubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo)
    settodos(()=>[...todos,{id:Date.now(),todo,completed:false}])
    

  }



  return (
    <div className="App">
      <h1>Todo app</h1>
      <InputBox todo={todo} settodo={settodo} handlesubmit={handlesubmit}/>
      <Todos todos={todos} settodos={settodos} />
      

    </div>
  );
}

export default App;
