import React, { FC } from 'react'
import cc from 'classnames'

import s from './s.module.scss'

interface Props {
  className?: string
  label: string
  bg:
    | 'stile'
    | 'dark'
    | 'rock'
    | 'grass'
    | 'bug'
    | 'ice'
    | 'water'
    | 'fire'
    | 'fighting'
    | 'dragon'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'normal'
    | 'gosth'
    | 'flying'
    | 'poison'
    | 'psychic'
    | 'fairy'
    | 'ghost'
    | 'ground'
    | 'electric'
}

const Label: FC<Props> = ({ className, label, bg }) => {
  return <div className={cc(s.core, s[bg], className)}>{label}</div>
}

export default Label
