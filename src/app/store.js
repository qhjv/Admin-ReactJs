import { configureStore } from "@reduxjs/toolkit";
import filterDateReducer from "../Features/people/components/peopleMainView/components/headerFilterDate/filterDateSlice"
import candidatesReducer from "../Features/people/components/peopleMainView/components/mainCandidatesView/mainCandidatesSlice"
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const rootReducer ={
    filterdate:filterDateReducer,
    candidateslist:candidatesReducer
}
const store = configureStore({
    reducer:rootReducer,
    middleware: [thunk, logger]
})
export default store