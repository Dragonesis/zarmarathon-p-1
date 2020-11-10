import React from 'react'
import * as Pages from '../pages'

interface IGeneralMenu {
  title: string
  path: string
  layoutTheme: string
  component: () => JSX.Element
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    path: '/',
    layoutTheme: 'color',
    component: () => <Pages.Home />,
  },
  {
    title: 'Pokedex',
    path: '/pokedex',
    layoutTheme: 'white',
    component: () => <Pages.Pokedex />,
  },
  {
    title: 'Legendaries',
    path: '/legendaries',
    layoutTheme: 'white',
    component: () => <Pages.Home />,
  },
  {
    title: 'Documentation',
    path: '/documentation',
    layoutTheme: 'white',
    component: () => <Pages.Pokedex />,
  },
]

interface IRoutes {
  [n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc: IRoutes, item: IGeneralMenu) => {
  acc[item.path] = item.component
  return acc
}, {})

export default routes
