import React, { FC } from 'react'
import cc from 'classnames'
import { Heading, Stat, Label } from '../../ui'
import { typeBgCard } from '../../../types/typeBgCard'

import s from './s.module.scss'

interface Props {
  className?: string
  name: string
  types: typeBgCard[]
  img: string
  attack: number
  defense: number
}

const PokemonCard: FC<Props> = ({ className, name, types, img, attack, defense }) => {
  const bg = types.length > 1 ? `linear-gradient(45deg, ${types.map((item) => s[item]).join(',')})` : s[types[0]]

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
