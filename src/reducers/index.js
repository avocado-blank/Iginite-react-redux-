import { combineReducers } from 'redux'
import detailReducer from './detilReducer'
import gamesReducer from './gamesReducer'

const rootReducers = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
})

export default rootReducers
