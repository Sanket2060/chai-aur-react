import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({     //create a store to store reducers and global variables
    reducer: todoReducer
})