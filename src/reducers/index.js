import counterReducer from './counter'
import isLoggedInReducer from './isloggedin'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: isLoggedInReducer
})

export default allReducers