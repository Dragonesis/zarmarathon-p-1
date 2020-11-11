import React from 'react'
import { useRoutes } from 'hookrouter'
import LayoutDefault from './layouts/Default'
import { NotFound } from './pages'
import routes from './router/index'

import './assets/styles/general.scss'

const App = () => {
  const mathch = useRoutes(routes)
  if (!mathch) {
    return <NotFound />
  }
  return <LayoutDefault>{mathch}</LayoutDefault>
}

export default App
