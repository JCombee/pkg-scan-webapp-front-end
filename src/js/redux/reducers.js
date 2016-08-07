import { combineReducers } from 'redux'

import { projects } from './projects/reducers'

export const rootReducer = combineReducers({
  projects
})

export default rootReducer
