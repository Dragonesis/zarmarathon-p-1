import React, { FC } from 'react'
import cc from 'classnames'
import { typeBgCard } from '../../../types/typeBgCard'

import s from './s.module.scss'

interface Props {
  className?: string
  label: string
  bg: typeBgCard
}

const Label: FC<Props> = ({ className, label, bg }) => {
  return <div className={cc(s.core, s[bg], className)}>{label}</div>
}

export default Label
