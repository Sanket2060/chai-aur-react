import { useContext,createContext } from "react";

export const todocontext=createContext({
  // todos:[{
  //   todo:" ",
  //   id:Date.now(),
  //   isCompleted:false,    
  // }
  // ],
    addTodo:(atodo)=>{},
    updateTodo:(id,atodo)=>{},
    deleteTodo:(id)=>{},
    updateTodoIsCompleted:(id)=>{}
})

export const TodoProvider=todocontext.Provider;

export const  todoContext=()=>{
  return useContext(todocontext);

} 
