import React from 'react'
import './styles.css'

interface Props {
  todo:string,
  settodo:React.Dispatch<React.SetStateAction<string>>
  handlesubmit:(e:React.FormEvent)=>void
}

const InputBox=({todo,settodo,handlesubmit}:Props)=> {
  return (
    <form className='input' onSubmit={handlesubmit}>
      <input type='text' className='inputbox' onChange={(e)=>settodo(e.target.value)}></input>
      <button className='submit'>Go</button>
    </form>
  )
}

export default InputBox
