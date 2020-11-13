import React, { FC } from 'react'
import s from './s.module.scss'

import img from './img/PokeBall1.svg'

const Label: FC = () => {
  return (
    <div className={s.core}>
      <img src={img} alt='' className={s.img} />
    </div>
  )
}

export default Label
