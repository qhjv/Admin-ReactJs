import { configureStore } from "@reduxjs/toolkit";
import filterDateReducer from "../Features/people/components/peopleMainView/components/headerFilterDate/filterDateSlice"

const rootReducer ={
    filterdate:filterDateReducer
}
const store = configureStore({
    reducer:rootReducer,
})
export default store