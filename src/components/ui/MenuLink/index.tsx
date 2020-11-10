/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode, FC } from 'react'
import cc from 'classnames'
import { A } from 'hookrouter'

import s from './s.module.scss'

interface Props {
  to: string
  className?: string
  title?: string
  children: ReactNode
}

const Menu: FC<Props> = ({ to, className, title, children }) => {
  return (
    <A href={to} className={cc(s.core, className)} title={title}>
      {children}
    </A>
  )
}

export default Menu
