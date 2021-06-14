import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import { gql, useQuery } from '@apollo/client';

const GET_TODOS = `
  query GetTodos {
    todos {
      id
      description
      status
    }
  }
`;

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response =  await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: GET_TODOS,
        }),
    })
    return response.json();
})

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        add: (state, todo) => {
            state.value.push(todo);
        },
        remove: (state, todo) => {
            state.value.remove(todo);
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            console.log(action.payload)
            state.todos = state.todos.concat(action.payload.data.todos)
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
    }
})

export const { add, remove } = todoSlice.actions
export default todoSlice.reducer
export const selectAllTodos = (state) => state.todos.todos
