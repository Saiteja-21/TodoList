import React from 'react'
import { useState } from 'react'
import { Todo } from '../Model'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'


interface Props {
    todos:Todo[],
    settodos:React.Dispatch<React.SetStateAction<Todo[]>>
    todo:Todo 
  
}

const SingleTodo=({todos,settodos,todo}:Props) =>{

    const [edit,setedit]=useState<Boolean>(false)
    const [text,settext]=useState<string>(todo.todo)
    console.log(todos)

    const handlesubmit=(e:React.FormEvent,id:number)=>{
        e.preventDefault()
        settodos(todos.map((todo)=>todo.id===id?({...todo,todo:text}):(todo)))
        setedit(!edit)
        

    }

    const handledelete=(id:number)=>{
        settodos(todos.filter((todo)=>todo.id!==id))
        
    }
const handledone=(id:number)=>{
    settodos(todos.map((todo)=>(todo.id===id?{...todo,completed:true}:todo)))

}

  return (

         <form  className='todo' onSubmit={(e)=>handlesubmit(e,todo.id)}>



{
 edit?(
     <input value={text} onChange={(e)=>settext(e.target.value)}></input>
 ):(
     
         todo.completed?(
             <s className='text'>{todo.todo}</s>
         ):(
             <span className='text'>{todo.todo}</span>
         )
          
 )
} 

 
 
 <span className='icon' onClick={()=>setedit(!edit)}><AiFillEdit/></span>
 <span className='icon' onClick={()=>handledelete(todo.id)}><AiFillDelete/></span>
 <span className='icon' onClick={()=>handledone(todo.id)}><MdDone/></span>


</form>
      

  )
}

export default SingleTodo
