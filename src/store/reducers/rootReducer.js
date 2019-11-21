import authReducer from './authReducer';
import eventReducer from './eventReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth : authReducer,
    event : eventReducer
})

export default rootReducer