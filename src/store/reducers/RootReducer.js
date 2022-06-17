import { combineReducers } from 'redux';
import JokesReducer from "./JokesReducer";

const appReducer = combineReducers({
    jokes: JokesReducer
});

const RootReducer = (state, action) => {
    if (action.type === 'CLEAR') {
        state = undefined
    }
    return appReducer(state, action)
}


export default RootReducer;