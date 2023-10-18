import React, { useState } from 'react'
import { todoContext } from '../../contexts/TodoContext'

function Todoform() {
    const [todo,setTodo]=useState();
    const  {addTodo}=todoContext();

    const onSubmitfunc=(e)=>{
        e.preventDefault();
        console.log("Reached after click")
        addTodo({isCompleted:false,todo});
    }
  return (
    <form  className="flex">
    <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e)=>setTodo(e.target.value)}
    />
    <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={onSubmitfunc}>
        Add
    </button>
</form>  )
}

export default Todoform


//Todos lai context mai rakhnu parxa ta?