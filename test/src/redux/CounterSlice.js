import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      totalflowers : 100,
     lotus :50,
     rose :50,

}

export const counter = createSlice({
     name:'flowers',
     initialState,
     reducers: {
        lotusincrement :(state) => {
            state.lotus += 20
        },
        rosedecrement :(state) => {
            state.rose-=10
        },
        incrementByAmount : (state,action) => {
            state.totalflowers += action.payload
        },
     },
})



export const { lotusincrement,rosedecrement,incrementByAmount} = counter.actions

export default counter.reducer