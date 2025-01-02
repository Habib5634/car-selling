import { combineReducers } from "redux";
import scrollReducer from './scrollSlice'
import modalReducer from './modalSlice'
export default combineReducers({

    scroll:scrollReducer,
    modal: modalReducer,
  
})