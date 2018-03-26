import { combineReducers } from 'redux'
import chat from './chat'
import search from './search'

const rootReducer = combineReducers({
  chat,
  search
});
export default rootReducer;