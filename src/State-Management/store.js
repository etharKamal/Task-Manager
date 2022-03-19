import { createStore, applyMiddleware, compose } from "redux";
import mainReducer from './reducer'



const store = createStore(mainReducer)

export default store;