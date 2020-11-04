/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import cc from 'classnames'

import s from './s.module.scss'

interface Props {
  to: string
  className?: string
  title?: string
  children: ReactNode
}

const Menu = (props: Props) => {
  const { to, title, children, className } = props
  return (
    // TODO Replace to some router
    <a href={to} className={cc(s.core, className)} title={title}>
      {children}
    </a>
  )
}

Menu.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  className: PropTypes.string,
}

export default Menu
