import {configureStore} from "@reduxjs/toolkit";
import userSlice from '../../6-entity/User/model/index.ts'
import todosSlice from '../../6-entity/Todo/model/index.ts'

export const store = configureStore({
    reducer: {
        user: userSlice,
        todos: todosSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
