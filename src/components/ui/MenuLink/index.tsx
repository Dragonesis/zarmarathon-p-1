/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode, FC } from 'react'
import cc from 'classnames'
import { NavLink } from 'react-router-dom'

import s from './s.module.scss'

interface Props {
  to: string
  className?: string
  title?: string
  children: ReactNode
}

const Menu: FC<Props> = ({ to, className, title, children }) => {
  return (
    <NavLink to={to} className={cc(s.core, className)} activeClassName={s.current} title={title} exact>
      {children}
    </NavLink>
  )
}

export default Menu
