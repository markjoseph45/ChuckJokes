import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './store/reducers/RootReducer';

const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(thunk),
    )
);

export default store;