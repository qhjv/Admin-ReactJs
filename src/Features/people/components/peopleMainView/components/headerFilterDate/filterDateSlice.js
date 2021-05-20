import { createSlice } from "@reduxjs/toolkit";

const filterDate = createSlice({
    name:'filterdate',
    initialState:[],
    reducers:{
        filterDateTime:(state,action)=>{
                state=action.payload
                console.log(state)
                return state
        },
        resetDate:(state,action)=>{
            state=action.payload
                console.log(state)
                return state
        }
    }
})
const {reducer,actions} =filterDate
export const {filterDateTime,resetDate}=actions
export default reducer;