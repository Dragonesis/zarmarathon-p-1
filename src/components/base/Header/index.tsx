import React from 'react'
import { Container } from '../../wrapper'
import Menu from './Menu'

import s from './s.module.scss'
import logo from './img/logo.svg'

const Header = () => {
  return (
    <div className={s.core}>
      <Container className={s.container}>
        <img src={logo} alt='' />
        <Menu />
      </Container>
    </div>
  )
}

export default React.memo(Header)
