import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './home/services/components/rootReducer';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f))
// {} là giá trị khởi tạo của store
export default store;