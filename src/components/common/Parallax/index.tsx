import React, { useEffect, useState } from 'react'
import cc from 'classnames'

import s from './s.module.scss'

import SmallPokeBallPng from './img/PokeBall1.svg'
import CloudPng from './img/Cloud2.svg'
import PokeBallPng from './img/Pokeball2.svg'
import CloudBigPng from './img/Cloud1.svg'
import PikachuPng from './img/Pikachu.png'

const Parallax = () => {
  const [screenX, setScreenX] = useState(0)
  const [screenY, setScreenY] = useState(0)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setScreenX(e.screenX)
      setScreenY(e.screenY)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [screenX, screenY])

  return (
    <div className={s.core}>
      <img
        style={{
          transform: `translate3d(${screenX * 0.001}rem, ${screenY * 0.001}rem, 0)`,
        }}
        src={SmallPokeBallPng}
        className={cc(s.layer, s.smallPokeBall)}
        alt='Small PokeBall'
      />
      <img
        style={{
          transform: `translate3d(${screenX * 0.002}rem, ${screenY * 0.002}rem, 0)`,
        }}
        src={CloudPng}
        className={cc(s.layer, s.cloud)}
        alt='Cloud PokeBall'
      />
      <img
        style={{
          transform: `translate3d(${screenX * 0.003}rem, ${screenY * 0.003}rem, 0)`,
        }}
        src={CloudBigPng}
        className={cc(s.layer, s.cloudBig)}
        alt='Cloud Big PokeBall'
      />
      <img
        style={{
          transform: `translate3d(${screenX * 0.004}rem, ${screenY * 0.004}rem, 0)`,
        }}
        src={PokeBallPng}
        className={cc(s.layer, s.pokeBall)}
        alt='Big PokeBall'
      />
      <img
        style={{
          transform: `translate3d(${screenX * 0.005}rem, ${screenY * 0.005}rem, 0)`,
        }}
        src={PikachuPng}
        className={cc(s.layer, s.pikachu)}
        alt='Cloud PokeBall'
      />
    </div>
  )
}

export default Parallax
