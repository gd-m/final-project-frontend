import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

import thunk from 'redux-thunk'
import users from './reducers/users/users'
import currentUser from './reducers/users/currentUser'
import loginForm from './reducers/loginForm'


const reducer = combineReducers({
    user: users,
    currentUser,
    loginForm
    
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose 
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store