import React from 'react'
import { Container } from '../../components/wrapper'
import { Heading } from '../../components/ui'

import s from './s.module.scss'

const Pokedex = () => {
  return (
    <div className={s.core}>
      <Container>
        <Heading tag='h1' size='size-h1'>
          Pokedex
        </Heading>
      </Container>
    </div>
  )
}

export default Pokedex
