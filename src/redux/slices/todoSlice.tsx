import { createSlice } from '@reduxjs/toolkit'


interface ToDoTask {
  id: string,
  title: string,
  completed: boolean
}

const initialState: { tasks: ToDoTask[] } = {
  tasks: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Math.random().toString(36).substring(2),
        title: action.payload,
        completed: false
      })
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    // toggleTask: (state, action) => {
    //   state.tasks = state.tasks.map((task) => {
    //     if (task.id === action.payload) {
    //       task.completed = !task.completed
    //     }
    //   })
    // },
  }
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = todoSlice.actions

export default todoSlice.reducer