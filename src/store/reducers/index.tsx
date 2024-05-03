import { combineReducers } from 'redux'
import { userReducer } from './dataUser'

const rootReducer = combineReducers({
  userReducer,
})

export default rootReducer
