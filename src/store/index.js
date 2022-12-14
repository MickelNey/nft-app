import {applyMiddleware, combineReducers, createStore} from "redux";
import { imageReducer } from './imagesReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    images: imageReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

