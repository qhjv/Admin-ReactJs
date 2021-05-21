import { createSlice } from "@reduxjs/toolkit";

const filterDate = createSlice({
    name:'filterdate',
    initialState:[],
    reducers:{
        filterDateTime:(state,action)=>{
                state=action.payload
                return state
        },
        resetDate:(state,action)=>{
            state=action.payload
                return state
        }
    }
})
const {reducer,actions} =filterDate
export const {filterDateTime,resetDate}=actions
export default reducer;
