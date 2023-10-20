import { useEffect, useState } from 'react'
import './App.css'
import Todoform from './components/todoform';
import TodoItem from './components/TodoItem';
import { TodoProvider } from '../contexts/TodoContext';
   
function App() {
  const [count, setCount] = useState(0);
  const [todos,setTodos]=useState([]);
  // const [todo, settodo] = useState("");
  const [isCompleted,setIsCompleted]=useState(false);

  const addTodo=(atodo)=>{
    // console.log("I reached here");
    setTodos((prevtodos)=>{

      if (!prevtodos) {             //sir ko ma kasto approach xa?
        return [{ id: Date.now(), ...atodo }];
      }
      else {return [{ id: Date.now(), ...atodo }, ...prevtodos]};
    })
  }



  // Local storage
  // useEffect(()=>{
  //   localStorage.setItem("todos",JSON.stringify(todos));
  // },[todos])
  // useEffect(()=>{
  //   console.log("Getting your todos from local storage");
  //  let lstodos=JSON.parse(localStorage.getItem("todos"));
  //  console.log(lstodos);
  //  setTodos(lstodos);
  // },[])
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
    }
}, []);

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);



  useEffect(()=>{
   console.log(todos);
  },[todos]);

  const updateTodo=(id,todo)=>{
       setTodos((prevtodos)=>{
          prevtodos.map((ctodo)=>{
            if (ctodo.id==id){
              return {...ctodo,todo}
            }
            else {
              return ctodo
            }
          })

       })
  }
  const deleteTodo=(id)=>{
     setTodos(todos.filter((todo)=>{
          if (todo.id!=id){
            return todo;
          }
     })
     
     )

  }

  const updateTodoIsCompleted=(id)=>{
    setTodos((prevtodos)=>{
      prevtodos.map((ctodo)=>{
        if (ctodo.id==id){
          console.log("Code reached here")
          return {...ctodo,isCompleted:true}
        }
        else {
          return ctodo
        }
      })

   })
  }

  return (
    <>
    <TodoProvider value={{addTodo,updateTodo,deleteTodo,updateTodoIsCompleted}}>
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
    </TodoProvider>
    </>
  )
}

export default App
