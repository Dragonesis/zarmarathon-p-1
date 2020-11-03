import React from 'react'
import cc from 'classnames'
import { MenuLink } from '../../../ui'

import s from './s.module.scss'

const Menu = () => {
  return (
    <div className={s.core}>
      <MenuLink to="#" title="Home" className={cc(s.link, s.current)}>
        Home
      </MenuLink>
      <MenuLink to="#" title="Pokédex" className={s.link}>
        Pokédex
      </MenuLink>
      <MenuLink to="#" title="Legendaries" className={s.link}>
        Legendaries
      </MenuLink>
      <MenuLink to="#" title="Documentation" className={s.link}>
        Documentation
      </MenuLink>
    </div>
  )
}

export default Menu
