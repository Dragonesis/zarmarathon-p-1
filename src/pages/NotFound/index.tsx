import React from 'react'
import { Container } from '../../components/wrapper'
import { Heading } from '../../components/ui'

import s from './s.module.scss'

const NotFound = () => {
  return (
    <div className={s.core}>
      <Container>
        <Heading tag='h1' size='size-h1'>
          NotFound
        </Heading>
      </Container>
    </div>
  )
}

export default NotFound
