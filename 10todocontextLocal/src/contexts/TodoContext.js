import {createContext, useContext} from "react"

export const TodoContext = createContext({
    // todos: [                yo define garnu pardaina sir le k k functions ma (parameter) 
    //     {                   chainxa vanera thaha pauna rakhnu vako ho bujauna lai.
    //         id: 1, 
    //         todo: " Todo msg",
    //         completed: false,
    //     }
    // ]
    // ,
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider