import React, { FC } from 'react'
import cc from 'classnames'

import s from './s.module.scss'

interface Props {
  className?: string
  type?: 'submit' | 'button' | 'reset'
  size?: 'size-big' | 'size-small'
  theme: 'theme-green' | 'theme-yellow'
  isFullWidth?: boolean
}

const Button: FC<Props> = ({
  type = 'button',
  size = 'size-small',
  theme,
  isFullWidth = false,
  className,
  children,
}) => {
  return (
    <button
      // TODO resolve the issue with the button type
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cc(s.core2, s[size], s[theme], isFullWidth && s.widthFull, className)}>
      {children}
    </button>
  )
}

export default Button
