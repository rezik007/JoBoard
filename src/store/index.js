import * as Redux from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from  '../reducers';

const enhancer = Redux.applyMiddleware(thunkMiddleware);
const reduxDevExtension =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
Redux.applyMiddleware(thunkMiddleware);
const store = Redux.createStore(rootReducer, enhancer, reduxDevExtension);

export default store;
