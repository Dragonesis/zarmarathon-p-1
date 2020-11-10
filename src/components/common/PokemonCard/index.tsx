import React, { FC, useEffect, useState } from 'react'
import cc from 'classnames'
import { Heading, Stat, Label } from '../../ui'
import { BG_TYPES } from '../../../const'

import s from './s.module.scss'

interface Props {
  className?: string
  name: string
  types: string[]
  img: string
  attack: number
  defense: number
}

const PokemonCard: FC<Props> = ({ className, name, types, img, attack, defense }) => {
  const [bg, setBg] = useState('')
  useEffect(() => {
    if (types.length > 1) {
      setBg(`linear-gradient(45deg, ${types.map((item) => BG_TYPES[item]).join(',')})`)
    } else {
      setBg(BG_TYPES[types[0]])
    }
  }, [types])

  return (
    <div className={cc(s.core, className)}>
      <div className={s.info}>
        <Heading className={s.name} size='size-h5'>
          {name}
        </Heading>
        <div className={s.stats}>
          <Stat className={s.stat} label='Attack' value={attack} />
          <Stat className={s.stat} label='Defense' value={defense} />
        </div>
        <div className={s.labels}>
          {types.map((item) => (
            <Label key={item} className={s.label} label={item} bg={item} />
          ))}
        </div>
      </div>
      <div className={s.preview} style={{ background: bg }}>
        <img src={img} alt={name} className={s.img} />
      </div>
    </div>
  )
}

export default PokemonCard
