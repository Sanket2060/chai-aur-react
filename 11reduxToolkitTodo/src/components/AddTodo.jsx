import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, updateTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const updateTodoNow=useSelector(state=>state.updateTodoNow)
    const getTodo=useSelector(state=>state.getTodo)
         


    
    
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    const takeTodo=()=>{
      e.preventDefault()
      dispatch(updateTodo(input))
      setInput('');


    }

  return (
    <form onSubmit={updateTodoNow?takeTodo:addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={updateTodoNow?"Update todo":"Enter a Todo..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {updateTodoNow?"Update todo":"Add Todo"}
      </button>
    </form>
  )
}

export default AddTodo
