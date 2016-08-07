import Immutable from 'immutable'

import { PROJECTS  } from './actions';

const initialState = Immutable.Map({
  isFetching: false,
  didInvalidate: false,
  items: Immutable.List([
    Immutable.Map({
      name: "Hello wOrLd!",
      slug: "hello-world"
    })
  ])
})

export function projects(state = initialState, action) {
  switch (action.type) {
    case PROJECTS.REQUEST :
      return state.set('isFetching', true);
    case PROJECTS.RECEIVE :
      return state.merge({
        isFetching: false,
        items: action.payload
      });
    case PROJECTS.RECEIVE_INVALIDATE :
      return state.merge({
        isFetching: false,
        items: action.payload
      });
    case PROJECTS.SELECT :
      return state.merge({
        isFetching: false,
        items: action.payload
      });
    default :
      return state;
  }
}
