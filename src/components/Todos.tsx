import React from 'react'
import {useState} from 'react'
import { Todo } from '../Model'
import './styles.css'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import SingleTodo from './SingleTodo'
  
interface Props {
    todos:Todo[],
    settodos:React.Dispatch<React.SetStateAction<Todo[]>>
     
  
}


const Todos=({todos,settodos}:Props)=> {
  


  return (
    <div className='todos'>
        {
            todos.map((todo)=>{
               return (
                <SingleTodo todos={todos} settodos={settodos} todo={todo}/>
                )

            })
        }
      
    </div>
  )
}

export default Todos
