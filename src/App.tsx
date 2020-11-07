import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LayoutDefault from './layouts/Default'
import routes from './router'

import './assets/styles/general.scss'

const App = () => {
  return (
    <BrowserRouter>
      <LayoutDefault>
        <Switch>
          {routes.map(({ name, path, isExact, component }) => (
            <Route key={name} path={path} exact={isExact} component={component} />
          ))}
        </Switch>
      </LayoutDefault>
    </BrowserRouter>
  )
}

export default App
