import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";


const store = createStore(reducer, applyMiddleware(thunk, myMiddleware));
store.subscribe(() => console.log(store.getState()))



function myMiddleware(store) {
    return next => action => {
        let result = next(action);
        return result;
    };
}


export default store


