import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import cc from 'classnames'

import s from './s.module.scss'

interface Props {
  children: ReactNode
  className?: string
}

const Container = (props: Props) => {
  const { children, className } = props
  return <div className={cc(s.core, className)}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Container
