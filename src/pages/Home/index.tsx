import React from 'react'
import { Container } from '../../components/wrapper'
import { Parallax } from '../../components/common'
import { Heading, Button } from '../../components/ui'

import s from './s.module.scss'

const Home = () => {
  return (
    <div className={s.core}>
      <Container className={s.container}>
        <div className={s.textBox}>
          <Heading tag='h1' size='size-h1'>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading tag='h2' className={s.descr}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button theme='theme-green' size='size-big' className={s.action}>
            See pokemons
          </Button>
        </div>
        <div className={s.parallaxBox}>
          <Parallax />
        </div>
      </Container>
    </div>
  )
}

export default Home
