import fetch from  'isomorphic-fetch'

import CONFIG from '../../config'

export const PROJECTS = {
  REQUEST: "PROJECTS.REQUEST",
  RECEIVE: "PROJECTS.RECEIVE",
  RECEIVE_INVALIDATE: "PROJECTS.RECEIVE_INVALIDATE",
  SELECT: "PROJECTS.SELECT"
};

function requestProjects() {
  return {
    type: PROJECTS.REQUEST
  };
}

function receiveProjects(items) {
  return {
    type: PROJECTS.RECEIVE,
    payload: items
  };
}

export function selectProject(project) {
  return {
    type: PROJECTS.SELECT
  };
}

function fetchProjects() {
  return dispatch => {
    dispatch(requstProjects())
    return fetch(CONFIG.ENDPOINTS.projects())
      .then(data => {
        return data.json();
      }).then(json => {
        return dispatch(receiveProjects(json));
      });
  };
}

function shouldFetchProjects(state) {
  const {projects} = state;
  if (projects.isFetching) {
    return false;
  }
  else if(projects.get('items').length === 0) {
    return true;
  }
  return projects.didInvalidate;
}

export function fetchProjectsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchProjects(getState())) {
      return dispatch(fetchProjects());
    }
  };
}
