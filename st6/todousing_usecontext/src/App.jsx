import { useEffect, useState } from 'react'
import './App.css'
import Todoform from './components/todoform';
import TodoItem from './components/TodoItem';
import { todoProvider } from '../contexts/TodoContext';
   
function App() {
  const [count, setCount] = useState(0);
  const [todos,setTodos]=useState([{id:Date.now(),isCompleted:true,todo:"Finish hw"}]);
  // const [todo, settodo] = useState("");
  const [id, setId] = useState();
  const [isCompleted,setIsCompleted]=useState(false);

  const addTodo=(atodo)=>{
    console.log("I reached here");
    setTodos((prevtodos)=>[{id:Date.now(),...atodo},...prevtodos])      //try if "prevtodos" as parameters naliyi gare
    console.log("Todos after change:",todos);
    console.log("I reached away from here");

    // kasto hunthyo.Chalthyo ki chalthena??
  }

  useEffect(()=>{
   console.log(todos);
  },[todos]);

  const updateTodo=(id,todo)=>{
       setTodos((prevtodos)=>{
          prevtodos.map((ctodo)=>{
            if (ctodo.id==id){
              ctodo.todo=todo;
            }
          })

       })
  }
  const deleteTodo=(id)=>{
     setTodos(todos.filter((todo)=>{
          if (todo.id=id){
            return todo;
          }
     })
     
     )

  }
  return (
    <>
    <todoProvider value={{addTodo,updateTodo,deleteTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                    <Todoform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((todo)=><div><TodoItem todo={todo}/></div>)}
                    </div>
                </div>
            </div>
    </todoProvider>
    </>
  )
}

export default App
