/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container } from '../../wrapper'
import { MenuLink } from '../../ui'

import s from './s.module.scss'

const Footer = () => {
  return (
    <div className={s.core}>
      <Container className={s.container}>
        <p className={s.item}>
          Make with
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </p>
        <MenuLink to="#" className={s.item}>
          Ours Team
        </MenuLink>
      </Container>
    </div>
  )
}

export default Footer
