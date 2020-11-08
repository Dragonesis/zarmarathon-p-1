import React, { ReactNode, FC } from 'react'
import cc from 'classnames'

import s from './s.module.scss'

interface Props {
  children: ReactNode
  className?: string
}

const Container: FC<Props> = ({ children, className }) => {
  return <div className={cc(s.core, className)}>{children}</div>
}

export default Container
