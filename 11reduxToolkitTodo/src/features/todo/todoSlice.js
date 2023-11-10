import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}],
    enableUpdateTodo:false,
    getTodo:()=>{}
    
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo:(state,action)=>{
        state.enableUpdateTodo=true;
        const newTodo=takeTodo();
        // let currentTodo=state.todos.filter((todoid)=>todoid==id)
        state.todos=state.todos.map((todo)=>(action.payload==todo.id)?{...todo,newTodo}:todo)
        state.enableUpdateTodo=false;
        },
    }
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions  //one by one sabai reducers lai export ni 
//paryo

export default todoSlice.reducer     //All reducer lai ekai chuti export ni paryo