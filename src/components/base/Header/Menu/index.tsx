import React from 'react'
import { usePath } from 'hookrouter'
import cc from 'classnames'
import { MenuLink } from '../../../ui'
import { GENERAL_MENU } from '../../../../router'

import s from './s.module.scss'

const Menu = () => {
  const currentPath = usePath()
  return (
    <div className={s.core}>
      {GENERAL_MENU.map(({ path, title }) => (
        <MenuLink key={path} to={path} title={title} className={cc(s.link, path === currentPath && s.current)}>
          {title}
        </MenuLink>
      ))}
    </div>
  )
}

export default Menu
