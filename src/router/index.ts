import * as Pages from '../pages'

interface Routes {
  name: string
  path: string
  layoutTheme: string
  isExact: boolean
  component: () => JSX.Element
}

const routes: Routes[] = [
  {
    name: 'Home',
    path: '/',
    layoutTheme: 'color',
    isExact: true,
    component: Pages.Home,
  },
  {
    name: 'Pokedex',
    path: '/pokedex',
    layoutTheme: 'white',
    isExact: false,
    component: Pages.Pokedex,
  },
]

export default routes
