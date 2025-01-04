import { combineReducers } from "redux";
import scrollReducer from './scrollSlice'
import modalReducer from './modalSlice'
import userDataReducer from './userSlice'
import categoryReducer from './categorySlice'
export default combineReducers({

    scroll:scrollReducer,
    modal: modalReducer,
    userData:userDataReducer,
    categories:categoryReducer,
})