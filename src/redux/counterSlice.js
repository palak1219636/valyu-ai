import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState, 
  reducers: {
   updateValue:(state, action)=>{
    state.value= action.payload;
   }
  },
})

export const { updateValue } = counterSlice.actions

export default counterSlice.reducer