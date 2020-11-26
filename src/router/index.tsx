/* eslint-disable no-shadow */
import React, { PropsWithChildren } from 'react'
import * as Pages from '../pages'
import * as Interface from '../interface'

interface IGeneralMenu {
  title: string
  path: string
  layoutTheme: string
  component: (props: PropsWithChildren<any>) => JSX.Element
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    path: LinkEnum.HOME,
    layoutTheme: 'color',
    component: () => <Pages.Home />,
  },
  {
    title: 'Pokedex',
    path: LinkEnum.POKEDEX,
    layoutTheme: 'white',
    component: () => <Pages.Pokedex />,
  },
  {
    title: 'Legendaries',
    path: LinkEnum.LEGENDARIES,
    layoutTheme: 'white',
    component: () => <Pages.Home />,
  },
  {
    title: 'Documentation',
    path: LinkEnum.DOCUMENTATION,
    layoutTheme: 'white',
    component: () => <Pages.Pokedex />,
  },
]

const OTHER_PAGES: IGeneralMenu[] = [
  {
    title: 'Ppokemon',
    path: LinkEnum.POKEMON,
    layoutTheme: 'white',
    component: ({ id }: Interface.ISlug) => <Pages.Pokemon id={id} />,
  },
]

interface IRoutes {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element
}

const routes = [...GENERAL_MENU, ...OTHER_PAGES].reduce((acc: IRoutes, item: IGeneralMenu) => {
  acc[item.path] = item.component
  return acc
}, {})

export default routes
