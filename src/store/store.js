import { combineReducers, compose, legacy_createStore as createStore } from "redux"
import { airReducer } from "./reducers/air.reducer.js"
const rootReducer = combineReducers({
    airModule: airReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

