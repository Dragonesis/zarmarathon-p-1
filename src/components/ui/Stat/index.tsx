import React, { FC } from 'react'
import cc from 'classnames'

import s from './s.module.scss'

interface Props {
  className?: string
  label: string
  value: number
}

const Stat: FC<Props> = ({ className, label, value }) => {
  return (
    <div className={cc(s.core, className)}>
      <div className={s.value}>{value}</div>
      <p className={s.label}>{label}</p>
    </div>
  )
}

export default Stat
