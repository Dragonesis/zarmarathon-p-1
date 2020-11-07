import React, { FC } from 'react'
import cc from 'classnames'

import s from './s.module.scss'

interface Props {
  tag?: keyof JSX.IntrinsicElements
  className?: string
  size?: 'size-h1' | 'size-h2' | 'size-h3' | 'size-h4' | 'size-h5' | 'size-h6'
}

const Heading: FC<Props> = ({ tag: Wrapper = 'h2', size = 'size-h2', className, children }) => {
  return <Wrapper className={cc(s.core, size && s[size], className)}>{children}</Wrapper>
}

export default Heading
