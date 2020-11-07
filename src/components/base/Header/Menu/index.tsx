import React from 'react'
import { MenuLink } from '../../../ui'

import s from './s.module.scss'

const MOCK_MENU = [
  { title: 'Home', to: '/' },
  { title: 'Pokedex', to: '/pokedex' },
  { title: 'Legendaries', to: '/legendaries' },
  { title: 'Documentation', to: '/documentation' },
]

const Menu = () => {
  return (
    <div className={s.core}>
      {MOCK_MENU.map((item) => (
        <MenuLink key={item.to} to={item.to} title={item.title} className={s.link}>
          {item.title}
        </MenuLink>
      ))}
    </div>
  )
}

export default Menu
