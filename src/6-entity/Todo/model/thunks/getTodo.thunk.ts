import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTodo, getTodos} from "../../api";
import {Todo} from "../../const";


export const fetchTodos = createAsyncThunk<Todo[], any, { state: RootState }>(
    'todos/fetchTodos',
    async (_, {dispatch}) => {
        const response = await getTodos()

        return response.data;
    }
)

export const fetchTodo = createAsyncThunk<Todo, number, { state: RootState }>(
    'todo/fetchTodo',
    async (id, {dispatch}) => {
        const response = await getTodo(id)

        return response.data
    }
)
