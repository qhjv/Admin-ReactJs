import { createSlice } from "@reduxjs/toolkit";

const candidates = createSlice({
    name:'candidates',
    initialState:[],
    reducers:{
        listCandidates:(state,action)=>{
            state=action.payload
            return state
    },
    }
})
const {reducer,actions} = candidates
export const {listCandidates}=actions
export default reducer;