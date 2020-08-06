import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import WorkList from './pages/WorkList'
import WorkForm from './pages/WorkForm'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/work" exact component={WorkList} />
        <Route path="/new-work" exact component={WorkForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes