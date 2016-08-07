import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import App from './components/app/App';
import Dashboard from './components/dashboard/DashboardContainer';

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={Dashboard} />
      </Route>
    </Router>
  )
}
