import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState={
   todos:[{
    id:1,
    text:"Finish homework",
    isCompleted:false
   }]
}

export const todoSlice=createSlice({
  name:"todo",
  initialState,
  reducers:{
    addTodo:()=>{},
    removeTodo:()=>{},
    updateTodo:()=>{}
  }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer